// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../components/ui/table";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";

// const nftCollections = [
//   {
//     rank: 1,
//     name: "Courtyard.io",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "18.70 MATIC",
//     volume: "19 ETH",
//   },
//   {
//     rank: 2,
//     name: "egg",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "0.18 ETH",
//     volume: "20 ETH",
//   },
//   {
//     rank: 3,
//     name: "Lil Pudgys",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "0.89 ETH",
//     volume: "111 ETH",
//   },
//   {
//     rank: 4,
//     name: "Genuine Undead V2",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "0.11 ETH",
//     volume: "11 ETH",
//   },
//   {
//     rank: 5,
//     name: "Nakamigos",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "0.14 ETH",
//     volume: "11 ETH",
//   },
//   {
//     rank: 6,
//     name: "Mutant Ape Yacht Club",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "2.03 ETH",
//     volume: "95 ETH",
//   },
//   {
//     rank: 7,
//     name: "The Memes by 6529",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "0.02 ETH",
//     volume: "6 ETH",
//   },
//   {
//     rank: 8,
//     name: "InfiniGods - InfiniPass",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "0.19 ETH",
//     volume: "6 ETH",
//   },
//   {
//     rank: 9,
//     name: "alignDRAW",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "1.45 ETH",
//     volume: "32 ETH",
//   },
//   {
//     rank: 10,
//     name: "Redacted Remilio Ba...",
//     icon: "/placeholder.svg?height=32&width=32",
//     floorPrice: "0.86 ETH",
//     volume: "26 ETH",
//   },
// ];

// export default function NftCollectionsTable() {
//   return (
//     <div className="p-4 bg-gray-900 text-gray-100 rounded-lg">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex space-x-2">
//           <button className="bg-gray-800 px-3 py-1 rounded">Trending</button>
//           <button className="px-3 py-1">Top</button>
//         </div>
//         <div className="flex space-x-2">
//           <button className="px-3 py-1">1h</button>
//           <button className="px-3 py-1">6h</button>
//           <button className="bg-gray-800 px-3 py-1 rounded">24h</button>
//           <button className="px-3 py-1">7d</button>
//           <Select>
//             <SelectTrigger className="w-[180px] bg-gray-800">
//               <SelectValue placeholder="All chains" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All chains</SelectItem>
//               <SelectItem value="ethereum">Ethereum</SelectItem>
//               <SelectItem value="polygon">Polygon</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Rank</TableHead>
//             <TableHead>Collection</TableHead>
//             <TableHead>Floor Price</TableHead>
//             <TableHead>Volume</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {nftCollections.map((collection) => (
//             <TableRow key={collection.rank}>
//               <TableCell className="font-medium">{collection.rank}</TableCell>
//               <TableCell className="flex items-center space-x-2">
//                 <img
//                   src={collection.icon}
//                   alt={collection.name}
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span>{collection.name}</span>
//               </TableCell>
//               <TableCell>{collection.floorPrice}</TableCell>
//               <TableCell>{collection.volume}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
