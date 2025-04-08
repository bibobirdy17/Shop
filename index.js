// index.js
// 儲存來自 index.html 的 localStorage 資料處理邏輯
window.addEventListener("DOMContentLoaded", () => {
  const total = document.getElementById("total-price")?.innerText || "";
  const summary = document.getElementById("order-summary-text")?.innerHTML || "";
  localStorage.setItem("order-total", total);
  localStorage.setItem("order-summary", summary);
});
