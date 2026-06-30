module.exports = async function handler(req, res) {
  const envKeys = Object.keys(process.env);
  return res.status(200).json({ keys: envKeys });
}
