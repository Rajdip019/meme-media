// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const res1 = await fetch("https://www.reddit.com/r/programmingmemes.json")
  const data = await res1.json();
  res.json(data);
}
