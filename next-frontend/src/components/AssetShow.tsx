import Image from "next/image";
import { Asset } from "../models";

export function AssetShow(props: { asset: Asset }) {
  const { asset } = props;
  return (
    <div className="flex space-x-1">
      <div className="content-center">
        <Image
          src={asset.image_url}
          alt={asset.symbol}
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col text-sm">
        <span>{asset.name}</span>
        <span>{asset.symbol}</span>
      </div>
    </div>
  );
}
