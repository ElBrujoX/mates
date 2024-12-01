import { test, expect } from '@playwright/test'

test('watch tower page shows all components', async ({ page }) => {
  await page.goto('/watch-tower')
  
  // Check main sections are visible
  await expect(page.getByText('Live Updates')).toBeVisible()
  await expect(page.getByText('Latest Reports')).toBeVisible()
  await expect(page.getByText('Trending Warnings')).toBeVisible()
  await expect(page.getByText('Verified Scams')).toBeVisible()
})

test('can submit new scam report', async ({ page }) => {
  await page.goto('/watch-tower')
  
  // Fill and submit report
  await page.getByRole('button', { name: 'Report Scam' }).click()
  await page.getByLabel('Title').fill('Test Scam Report')
  await page.getByLabel('Description').fill('Test description')
  await page.getByRole('button', { name: 'Submit' }).click()
  
  // Check report appears in list
  await expect(page.getByText('Test Scam Report')).toBeVisible()
})

test('handles error states gracefully', async ({ page }) => {
  // Mock API error
  await page.route('**/api/watch-tower/**', (route) => 
    route.fulfill({ status: 500 })
  )
  
  await page.goto('/watch-tower')
  await expect(page.getByText('Error loading')).toBeVisible()
})

test('real-time updates work', async ({ page }) => {
  await page.goto('/watch-tower')
  
  // Simulate new report
  await page.evaluate(() => {
    window.postMessage({
      type: 'REALTIME_UPDATE',
      payload: {
        type: 'scam_report',
        data: {
          title: 'New Real-time Report'
        }
      }
    }, '*')
  })
  
  await expect(page.getByText('New Real-time Report')).toBeVisible()
})

test('filters and sorting work', async ({ page }) => {
  await page.goto('/watch-tower')
  
  // Test risk level filter
  await page.getByRole('combobox', { name: 'Risk Level' }).selectOption('critical')
  await expect(page.getByText('Critical Risk')).toBeVisible()
  
  // Test date sorting
  await page.getByRole('button', { name: 'Sort by Date' }).click()
  // Verify order changed
}) 