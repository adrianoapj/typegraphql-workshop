import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

if (process.env.MONGO_STRING) {
  mongoose.connect(process.env.MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

