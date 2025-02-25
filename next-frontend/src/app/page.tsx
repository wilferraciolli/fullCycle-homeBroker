import { TableWalletAssetRow } from '@/app/TableWalledAssetRow';
import { WalletAsset } from '@/models';
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import Link from 'next/link';
import { AssetShow } from '../components/AssetShow';
import { WalletList } from '../components/WalletList';
import { getMyWallet } from '../queries/queries';
import {AssetsSync} from "@/components/AssetSync";

export default async function MyWalletListPage({
                                                 searchParams
                                               }: {
  searchParams: Promise<{ wallet_id: string }>;
}) {
  const { wallet_id } = await searchParams;
  if (!wallet_id) {
    return <WalletList/>;
  }

  const wallet = await getMyWallet(wallet_id);

  if (!wallet) {
    return <WalletList/>;
  }

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Minha carteira</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {wallet.assets.map((walletAsset: WalletAsset, key: number) => (
              <TableWalletAssetRow
                key={key}
                walletAsset={walletAsset}
                walletId={wallet_id}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      <AssetsSync assetsSymbols={wallet.assets.map(walletAsset => walletAsset.asset.symbol)}/>
    </div>
  );
}

