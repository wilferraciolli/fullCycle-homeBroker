'use client';

import { useEffect } from "react";
import { socket } from "../socket-io";
import { Asset } from "../models";
import { useAssetStore } from "../store";

export function AssetsSync(props: { assetsSymbols: string[] }) {
  const { assetsSymbols } = props;
  const changeAsset = useAssetStore((state) => state.changeAsset);

  useEffect(() => {
    socket.connect();

    socket.emit("joinAssets", { symbols: assetsSymbols });
    socket.on("assets/price-changed", (asset: Asset) => {
      console.log(asset);
      changeAsset(asset);
    });

    return () => {
      socket.emit("leaveAssets", { symbols: assetsSymbols });
      socket.off("assets/price-changed");
    };
  }, [assetsSymbols, changeAsset]);

  return null;
}


// TODO stopped lesson 3 1:27 hour
// TODO stopped lesson 3 1:27 hour
// TODO stopped lesson 3 1:27 hour
// TODO stopped lesson 3 1:27 hour
// TODO stopped lesson 3 1:27 hour