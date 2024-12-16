# Typography System Documentation

## Font Families
- **Display Text**: Plus Jakarta Sans (headers, large text)
- **Body Text**: DM Sans (paragraphs, content)
- **System Text**: Inter (UI elements, buttons)

## Type Scale

### Display Text
Used for headlines, hero text, and major section headers
- `text-display-2xl`: 4.5rem (72px) - Hero headlines
- `text-display-xl`: 3.75rem (60px) - Major section headers
- `text-display-lg`: 3rem (48px) - Section headers
- `text-display-md`: 2.25rem (36px) - Subsection headers
- `text-display-sm`: 1.875rem (30px) - Minor headers
- `text-display-xs`: 1.5rem (24px) - Small headers

### Body Text
Used for paragraphs, content, and UI text
- `text-body-xl`: 1.25rem (20px) - Featured content
- `text-body-lg`: 1.125rem (18px) - Large body text
- `text-body-md`: 1rem (16px) - Default body text
- `text-body-sm`: 0.875rem (14px) - Small text
- `text-body-xs`: 0.75rem (12px) - Extra small text

## Usage Guidelines

1. **Headers**
   - Main hero: `text-display-2xl`
   - Section headers: `text-display-lg`
   - Subsection headers: `text-display-md`

2. **Body Text**
   - Main content: `text-body-md`
   - Featured paragraphs: `text-body-lg`
   - Secondary information: `text-body-sm`

3. **Responsive Design**
   - Use smaller display sizes on mobile
   - Scale up progressively for larger screens
   Example:
   ```tsx
   className="text-display-lg sm:text-display-xl md:text-display-2xl"
   ```

4. **Line Height**
   - Display text: Tighter (1.1-1.2)
   - Body text: Looser (1.5-1.6)

5. **Letter Spacing**
   - Display text: Slightly negative (-0.02em to -0.01em)
   - Body text: Normal (0)