import { Image } from "@nextui-org/react";

interface VoucherDisplayProps {
  balance: string;
  uri: string;
  voucherId: number;
}

export default function VoucherDisplay({
  balance,
  uri,
  voucherId,
}: VoucherDisplayProps) {
  const paddedString = voucherId.toString().padStart(64, "0");
  const url = `https://bafybeignni52xp4fap7ex6vm64fshfmws245c7y47zzyuloacfbx6o6qyy.ipfs.nftstorage.link/assets/${paddedString}.png`;
  return (
    <div className="flex flex-col text-sm font-semibold text-center w-fit space-y-2">
      <Image src={url} width={133} height={100} alt="gho" />
      <div>
        <div>${(+balance).toLocaleString()}</div>
        <div className="text-xs text-tertiary font-normal">Remaining</div>
      </div>
    </div>
  );
}
