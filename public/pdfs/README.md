# PDF Resources Folder

This folder contains PDF files that are displayed on the Revision Materials page.

## How to Add PDF Files

1. **Place your PDF files in this folder** (`public/pdfs/`)
2. **Update the component** at `src/components/pages/RevisionPage.tsx`
3. **Add an entry** to the `pdfResources` array with the following structure:

```typescript
{
  id: 'unique-id',
  title: 'Display Title',
  description: 'Brief description of the PDF content',
  filename: 'actual-filename.pdf',  // Must match the file in this folder
  size: 'X.X MB'  // Approximate file size
}
```

## Example PDF Files

The component currently references these PDF files:
- `java-oop-fundamentals.pdf`
- `control-structures-guide.pdf`
- `recursion-practice.pdf`
- `arrays-strings-handbook.pdf`

**Note:** These are placeholder references. Replace them with your actual PDF files.

## File Naming Convention

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names
- Example: `java-oop-fundamentals.pdf`
