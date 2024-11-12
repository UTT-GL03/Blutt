const visit = async (page) => {
  await page.goto('carpooler-home', {
    waitUntil: 'networkidle',
  });
  await page.waitForTimeout(10000);
  await page.waitForNetworkIdle();
  await page.waitForTimeout(7000);
};
module.exports = visit;