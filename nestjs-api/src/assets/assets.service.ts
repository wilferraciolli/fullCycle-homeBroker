import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssetDto } from './dto/create-asset.dto';
import { Asset } from './entities/asset.entity';
import { Observable } from 'rxjs';

@Injectable()
export class AssetsService {
  // inject the entity that this service will manage by using mongoose
  constructor(@InjectModel(Asset.name) private assetSchema: Model<Asset>) {
  }

  create(createAssetDto: CreateAssetDto) {
    return this.assetSchema.create(createAssetDto);
  }

  findAll() {
    return this.assetSchema.find();
  }

  findOne(symbol: string) {
    return this.assetSchema.findOne({ symbol });
  }

  // method used to create a stream of asset logs to when the database changes Eg update, delete...
  subscribeNewPriceChangedEvents(): Observable<Asset> {
    return new Observable((observer) => {
      this.assetSchema
          .watch(
            [
              {
                $match: {
                  $or: [
                    { operationType: 'update' },
                    { operationType: 'replace' },
                  ],
                },
              },
            ],
            {
              fullDocument: 'updateLookup',
              fullDocumentBeforeChange: 'whenAvailable',
            },
          )
          .on('change', async (data) => {
            if (data.fullDocument.price === data.fullDocumentBeforeChange.price) {
              return;
            }
            const asset = await this.assetSchema.findById(data.fullDocument._id);
            observer.next(asset!);
          });
    });
  }
}

// TODO stopped lesson 3 1 hour
// TODO stopped lesson 3 1 hour
// TODO stopped lesson 3 1 hour
// TODO stopped lesson 3 1 hour
// TODO stopped lesson 3 1 hour
