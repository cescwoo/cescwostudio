export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100vh',
      padding: '5rem 1rem',
      fontFamily: 'serif',
    }}>
      <section style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>CESCWO STUDIO</h1>
        <p style={{ fontSize: '1.25rem', color: '#444' }}>
          CESCWO STUDIO è uno studio creativo fondato a Milano con sede interamente digitale.<br /><br />
          Ci occupiamo della progettazione e realizzazione di copertine musicali, campagne di comunicazione, loghi, branding, visual identity, progetti editoriali e pubblicitari.<br /><br />
          Attraverso un approccio trasversale e contemporaneo, diamo forma a identità visive forti, riconoscibili e in linea con l’anima di ogni progetto.
        </p>
      </section>
      <footer style={{ textAlign: 'center', paddingTop: '4rem', fontSize: '0.875rem', color: '#666' }}>
        <p>© {new Date().getFullYear()} CESCWO STUDIO</p>
        <p style={{ marginTop: '0.5rem' }}><a href="mailto:cescwostudio@gmail.com">cescwostudio@gmail.com</a></p>
      </footer>
    </main>
  )
}