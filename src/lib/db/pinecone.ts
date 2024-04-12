import { Pinecone } from '@pinecone-database/pinecone';

const apiKey = process.env.PINECONE_API_KEY;

if (!apiKey) {
  throw Error('Missing PINECONE_API_KEY');
}

const pinecone = new Pinecone({
    apiKey,
    // environment: 'us-east-1',
});

export const notesIndex = pinecone.index("custom-notes-ai-bot");