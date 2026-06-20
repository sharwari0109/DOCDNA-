import axios from "axios";

const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhZWYwN2RmNi1hM2E3LTRkZTktYmRlZi0wNzM5NWQzOTQwYmEiLCJlbWFpbCI6InNoYXJ3YXJpMDEwOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMmY1MDIyYjRlZDdhZDA5ZjY3MDkiLCJzY29wZWRLZXlTZWNyZXQiOiI3YWQ2YjA4Mzg0MDU5Mjg3NGQ0NjNiMWVkOTc4NThhYTYyNDk3NzQ5YTc3MWQ4NWUyNzQ1Y2U4MTMzOTU0ZGQwIiwiZXhwIjoxODEzNDQ1MjkwfQ.56vF2nxIcafMYeDS4af4vNd4lNDTnn7R2p1R22B1tM4";

export async function uploadToPinata(file: File) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      }
    );

    console.log("PINATA SUCCESS", response.data);

    return response.data.IpfsHash;
  } catch (error: any) {
    console.error("PINATA ERROR", error.response?.data);
    throw error;
  }
}