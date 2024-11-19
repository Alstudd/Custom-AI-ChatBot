import OpenAI from 'openai';

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

if (!apiKey) {
  throw Error('Missing NEXT_PUBLIC_OPENAI_API_KEY')
}

const openai = new OpenAI({ apiKey });

export default openai;

export async function getEmbedding(text: string) {
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
  });

  const embedding = response.data[0].embedding;
  if (!embedding) {
    throw Error('Failed to get embedding');
  }
  console.log(embedding);
  return embedding;
}