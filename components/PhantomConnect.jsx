"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Copy } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { Button } from "./ui/button";
import useAuthStore from "../app/store/auth-store";
import { cn } from "../lib/utils";

export default function PhantomWalletConnect({ hide }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore((state) => state);
  const router = useRouter();

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

  if (!user) {
    return (
      <Button onClick={() => router.push("/login")} className={buttonClass}>
        Login
      </Button>
    );
  }

  return (
    <div className={cn("block", hide && "hidden lg:block")}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            {isLoading ? (
              <button className={buttonClass} disabled>
                Connecting...
              </button>
            ) : walletAddress ? (
              <Button className={buttonClass} onClick={handleDisconnect}>
                Disconnect Wallet
              </Button>
            ) : (
              <Button className={buttonClass} onClick={connectWallet}>
                Connect Wallet
              </Button>
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
