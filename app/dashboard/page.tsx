// file-system routing
// route segments (segments): a folder inside app/
// app -> root segment
// dashboard -> segment
// invoices -> leaf segment

// (group_name) -> group of segments

// CODE SPLITTING:
// pages also allow the Nextjs to do code splitting (by routes), 
// where it loads gradually and on-demand (like images' lazy loading) the code to execute,
// improving user experience by lightening initial loads. It also avoids errors to become global.

export default function Page() {
  return (
    <div>Dashboard Page</div>
  )
}