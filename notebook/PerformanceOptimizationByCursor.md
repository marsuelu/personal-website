# Performance Optimization Guide

## Local Development vs GitHub Pages Performance Differences

### Why GitHub Pages Performance Differs from Local Development

1. **Build Optimization**: Local dev serves unoptimized code, GitHub Pages serves production build
2. **Network Conditions**: Different CDN and network latency
3. **Bundle Splitting**: Production builds have different chunk strategies
4. **Compression**: GitHub Pages serves compressed files

## Current Optimizations Applied

### 1. Vite Configuration Optimizations

- ✅ Minification with Terser
- ✅ Console and debugger removal
- ✅ Optimized chunk splitting
- ✅ Asset naming optimization
- ✅ CSS code splitting and minification

### 2. HTML Optimizations

- ✅ Critical CSS preloading
- ✅ Font preloading
- ✅ DNS prefetching
- ✅ Meta tag optimizations

### 3. Bundle Analysis

Run `npm run build` and check the analyzer at `http://localhost:8687` to identify large chunks.

## Additional Optimizations to Implement

### 1. Route-based Code Splitting

```typescript
// In your router configuration
const Resume = lazy(() => import('@/pages/resume/Index'));
const Travel = lazy(() => import('@/pages/travel/Index'));
const Manicure = lazy(() => import('@/pages/manicure/Index'));
```

### 2. Image Optimization

- Use WebP format for images
- Implement lazy loading for images
- Use responsive images with `srcset`

### 3. Font Optimization

- Subset fonts to include only used characters
- Use `font-display: swap` for better loading
- Consider using system fonts for better performance

### 4. Critical CSS Inlining

Extract critical CSS and inline it in the HTML head.

### 5. Service Worker for Caching

Implement a service worker for better caching strategies.

## Lighthouse Score Targets

### Performance

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### Best Practices

- Use HTTPS
- Avoid deprecated APIs
- Proper error handling

### Accessibility

- Proper ARIA labels
- Keyboard navigation
- Color contrast ratios

### SEO

- Meta descriptions
- Proper heading structure
- Alt text for images

## Monitoring Performance

### 1. Build Analysis

```bash
npm run build
# Check bundle analyzer at http://localhost:8687
```

### 2. Lighthouse Testing

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Test local build
npm run build
npx serve dist
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

### 3. GitHub Pages Testing

After deployment, test the live site:

```bash
lighthouse https://marsuelu.github.io/personal-website --output html
```

## Common Issues and Solutions

### 1. Large Bundle Sizes

- Use dynamic imports for routes
- Split vendor chunks
- Remove unused dependencies

### 2. Slow Font Loading

- Preload critical fonts
- Use `font-display: swap`
- Consider system fonts

### 3. Image Performance

- Optimize image formats
- Implement lazy loading
- Use appropriate sizes

### 4. JavaScript Performance

- Minimize main thread work
- Use Web Workers for heavy computations
- Implement proper code splitting

## Deployment Checklist

Before deploying to GitHub Pages:

1. ✅ Run `npm run build`
2. ✅ Check bundle analyzer for large chunks
3. ✅ Test locally with `npm run preview`
4. ✅ Run Lighthouse on local build
5. ✅ Deploy with `npm run deploy`
6. ✅ Test live site performance

## Performance Monitoring

### Continuous Monitoring

- Set up GitHub Actions to run Lighthouse tests
- Monitor Core Web Vitals
- Track bundle size changes

### Tools

- Lighthouse CI
- Bundle Analyzer
- WebPageTest
- GTmetrix

## Resources

- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [Lighthouse Performance](https://web.dev/performance/)
- [Web Vitals](https://web.dev/vitals/)
- [Bundle Analysis](https://web.dev/bundle-analysis/)
