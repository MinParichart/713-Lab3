// Task 9 Lab 3
// import { S3Client } from "@aws-sdk/client-s3";

// export const s3Client = new S3Client({
//   credentials: {
//     accessKeyId: "7970f16384d70191bd5e348f0fbcac84",
//     secretAccessKey: "68b49ac6eb57753c00c267423834b5747cf06891e3813ab6cf990c6a66ef011f",
//   },
//   endpoint: "https://kdkwuxvoydubcwehmxfy.supabase.co/storage/v1/s3",
//   region: "ap-southeast-1",
//   forcePathStyle: true,
// });

// Task 12 Lab 3
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const endpoint = process.env.SUPABASE_ENDPOINT_URL;
const region = process.env.AWS_REGION;

if (!accessKeyId || !secretAccessKey || !endpoint || !region) {
  throw new Error("Missing required environment variables for AWS S3 configuration");
}

export const s3Client = new S3Client({
  credentials: {
    accessKeyId,
    secretAccessKey
  },
  endpoint,
  region,
  forcePathStyle: true,
});



