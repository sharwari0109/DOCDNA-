import { randomUUID } from "crypto";

export class BlockchainService {
  async registerDocumentOnChain(
    documentHash: string,
    ipfsCID: string,
    ownerWallet: string
  ) {
    return {
      hash: documentHash,
      txHash: `0x${randomUUID().replace(/-/g, "")}`,
      blockNumber: Math.floor(Math.random() * 1000000),
      wallet: ownerWallet,
      timestamp: new Date().toISOString(),
      cid: ipfsCID,
    };
  }

  async getDocumentFromChain(documentHash: string) {
    return {
      hash: documentHash,
      cid: "demo-cid",
      owner: "demo-owner",
      timestamp: Date.now(),
      exists: true,
    };
  }

  async verifyDocumentOnChain(documentHash: string) {
    return {
      verified: true,
      txHash: `0x${randomUUID().replace(/-/g, "")}`,
      blockNumber: Math.floor(Math.random() * 1000000),
    };
  }
}

export const blockchainService = new BlockchainService();
