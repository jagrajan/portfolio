import mongoose from 'mongoose';

export default class MongoHelper {

  public static connect(url: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
        .then(
          () => resolve(true),
          error => reject(error)
        );
    });
  }

}
