import { TableAssetRow } from '@/app/assets/TableAssetRow';
import { AssetsSync } from '@/components/AssetSync';
import { Table, TableBody, TableHead, TableHeadCell } from 'flowbite-react';
import { WalletList } from '../../components/WalletList';
import { getAssets, getMyWallet } from '../../queries/queries';


export default async function AssetsListPage({
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

  const assets = await getAssets();

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/vender</TableHeadCell>
          </TableHead>
          <TableBody>
            { assets.map((asset, key) => (
              <TableAssetRow key={ key }
                             asset={ asset }
                             walletId={ wallet_id }/>
            )) }
          </TableBody>
        </Table>
      </div>
      <AssetsSync assetsSymbols={ assets.map(asset => asset.symbol) }/>
    </div>
  );
}
