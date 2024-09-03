import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy } from "lucide-react";

export default function PhantomWalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setIsLoading(true);

    const getProvider = () => {
      if ("phantom" in window) {
        const provider = window.phantom?.solana;

        if (provider?.isPhantom) {
          return provider;
        }
      }
      return null;
    };

    const provider = getProvider();
    if (!provider) {
      alert("Phantom wallet not detected. Please install it.");
      window.open("https://phantom.app/", "_blank");
      setIsLoading(false);
      return;
    }

    try {
      const resp = await provider.connect();
      const publicKey = resp.publicKey.toString();
      setWalletAddress(publicKey);

      provider.on("accountChanged", (publicKey) => {
        if (publicKey) {
          setWalletAddress(publicKey.toString());
          console.log(`Switched to account ${publicKey.toBase58()}`);
        } else {
          setWalletAddress(null);
          console.log("Disconnected from Phantom");
        }
      });
    } catch (err) {
      alert(`${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnect = () => {
    const { solana } = window;
    if (solana?.isPhantom) {
      solana.disconnect();
      setWalletAddress(null);
      console.log("Disconnected from Phantom wallet.");
    }
  };

  const buttonClass =
    "font-semibold w-fit lg:flex bg-custom-gradient gap-3 px-[16px] py-[10px] rounded-xl";

  return (
    <div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            {isLoading ? (
              <button className={buttonClass} disabled>
                Connecting...
              </button>
            ) : walletAddress ? (
              <button className={buttonClass} onClick={handleDisconnect}>
                Disconnect Wallet
              </button>
            ) : (
              <button className={buttonClass} onClick={connectWallet}>
                Connect Wallet
              </button>
            )}
          </TooltipTrigger>

          {walletAddress && (
            <TooltipContent className="flex items-center gap-2">
              {
                <p className="text-black text-[13px]">
                  Wallet Address: {walletAddress}
                </p>
              }
              <Copy
                color="#000"
                size={20}
                className="cursor-pointer"
                onClick={(e) => navigator.clipboard.writeText(walletAddress)}
              />
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
