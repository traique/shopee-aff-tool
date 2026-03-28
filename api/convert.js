export default async function handler(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "Thiếu link" });
    }

    const response = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": "Mozilla/5.0" }
    });

    const finalUrl = response.url;

    const aff =
      "https://s.shopee.vn/an_redir?utm_medium=affiliates" +
      "&affiliate_id=17390310392" +
      "&origin_link=" + encodeURIComponent(finalUrl);

    res.status(200).json({
      affiliateLink: aff
    });

  } catch (e) {
    res.status(500).json({ error: "Lỗi xử lý link" });
  }
}
