import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { WalletPresenter } from './wallet.presenter';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletsService.create(createWalletDto);
  }

  @Get()
  findAll() {
    return this.walletsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const wallet = await this.walletsService.findOne(id);

    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }

    return new WalletPresenter(wallet);
  }

  @Post(':id/assets')
  createWalletAsset(
    @Param('id') id: string,
    @Body() body: { assetId: string; shares: number },
  ) {
    return this.walletsService.createWalletAsset({
      walletId: id,
      assetId: body.assetId,
      shares: body.shares,
    });
  }
}
