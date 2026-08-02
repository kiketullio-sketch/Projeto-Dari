import { useState, useEffect, useRef } from 'react'
import logoImg from '@/imports/images.images.jpeg'
import heroImg from '@/imports/Screenshot_2026-08-02_at_14.24.27.png'
import aboutImg from '@/imports/Screenshot_2026-08-01_at_20.03.18.png'
import gallery1 from '@/imports/Screenshot_2026-08-01_at_20.02.58.png'
import gallery2 from '@/imports/Screenshot_2026-08-01_at_20.02.42.png'
import gallery3 from '@/imports/Screenshot_2026-08-02_at_14.23.47.png'
import gallery4 from '@/imports/Screenshot_2026-08-01_at_20.04.32.png'

const BG = '#f5ede6'
const WA_LINK = 'https://wa.me/5542999237535?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20exclusivo%20na%20Dari%20Boutique%20%F0%9F%98%8A'
const IG_LINK = 'https://www.instagram.com/dari.boutique/'

const TESTIMONIALS = [
  {
    name: 'Silmara Chiquito',
    role: 'Local Guide · 79 avaliações',
    text: 'Fui atendida como uma princesa. Por sinal o pessoal que faz atendimento ao público, poderia ir lá ficar um tempinho, pra aprender como se atende os clientes.',
  },
  {
    name: 'Letícia Szczerepa',
    role: 'Local Guide · 89 avaliações',
    text: 'A loja é incrível, com muuuita variedade de roupa, vestidos, blusas e etc. O atendimento é excepcional, a Dari é muito atenciosa, retorna as mensagens, vê a disponibilidade de pedir de fábrica as roupas caso não tenha no seu tamanho. Adorei e super recomendo!',
  },
  {
    name: 'Jociana Ferreira',
    role: '3 avaliações',
    text: 'Compro a quase 10 anos e reconheço como uma das melhores Boutiques da cidade, preço justo, ambiente acolhedor, se necessário vem até mim. Roupas diferenciadas, bom gosto ímpar! Vale muito pena.',
  },
  {
    name: 'Danieli Milan',
    role: '2 avaliações',
    text: 'Atendimento sempre com muita educação. Me deixa super à vontade pra escolher e provar. Além de sempre ter uma dica de moda para compor looks. Sou fã!!!',
  },
  {
    name: 'Juliana Bergmann Issa',
    role: '9 avaliações',
    text: 'Amo a Dari Boutique, principalmente pelo bom gosto e por nos oferecer marcas exclusivas! A loja é uma graça, super aconchegante e o melhor com muitas vagas pra estacionar!',
  },
]

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a96e" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (idx: number) => {
    setVisible(false)
    setTimeout(() => {
      setActive(idx)
      setVisible(true)
    }, 280)
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive(prev => (prev + 1) % TESTIMONIALS.length)
        setVisible(true)
      }, 280)
    }, 4500)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  const t = TESTIMONIALS[active]

  return (
    <section style={{ backgroundColor: BG, padding: '64px 32px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>

        {/* Nota Google */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 36 }}>
          <div style={{ display: 'flex', gap: 3 }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <span style={{
            fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500,
            color: '#6b5048', letterSpacing: '0.04em',
          }}>
            5.0 no Google · avaliações reais de clientes
          </span>
        </div>

        {/* Depoimento */}
        <div style={{
          minHeight: 140,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(19px, 2.2vw, 23px)',
            lineHeight: 1.7,
            color: '#2c1f18',
            marginBottom: 24,
          }}>
            "{t.text}"
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', color: '#b04070', marginBottom: 2 }}>
            {t.name}
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: '#8a7570' }}>
            {t.role}
          </p>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? 20 : 7,
                height: 7,
                borderRadius: 4,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                backgroundColor: i === active ? '#b04070' : 'rgba(176,64,112,0.25)',
                transition: 'width 0.3s ease, background-color 0.3s ease',
              }}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setLoading(false), 600)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  const gallery = [
    { src: gallery1, label: 'CONFIANÇA EM CADA LOOK', pos: 'center top' },
    { src: gallery2, label: 'PEÇAS DA COLEÇÃO', pos: 'center top' },
    { src: gallery3, label: 'CAIMENTO E ESTILO', pos: 'center top' },
    { src: gallery4, label: 'FACHADA DARI BOUTIQUE', pos: 'center top' },
  ]

  return (
    <>
      <style>{`
        @keyframes dari-fade-in {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .dari-header-inner { padding: 0 20px !important; height: 64px !important; }
          .dari-nav { display: none !important; }
          .dari-logo img { height: 44px !important; }

          .dari-hero { grid-template-columns: 1fr !important; padding: 40px 20px 60px !important; gap: 40px !important; }
          .dari-hero-img { height: 380px !important; object-position: center center !important; }
          .dari-hero-card { bottom: -16px !important; left: 12px !important; max-width: 220px !important; padding: 14px 16px !important; }
          .dari-hero-card p { font-size: 13px !important; }
          .dari-hero-btns { flex-direction: column !important; }
          .dari-hero-btns a { text-align: center !important; }
          .dari-availability { font-size: 13px !important; }

          .dari-sobre { grid-template-columns: 1fr !important; padding: 48px 20px !important; gap: 32px !important; }
          .dari-sobre-img { height: 400px !important; object-position: center top !important; }

          .dari-diferencial { padding: 48px 20px !important; }
          .dari-diferencial-cards { grid-template-columns: 1fr !important; }
          .dari-diferencial-card { padding: 32px 24px !important; }
          .dari-diferencial-stat { padding: 32px 24px !important; }
          .dari-diferencial-stat p:first-child { font-size: 56px !important; }

          .dari-como { padding: 48px 20px !important; }
          .dari-steps { grid-template-columns: 1fr 1fr !important; }
          .dari-step { border-left: none !important; border-top: 1px solid rgba(176,64,112,0.15) !important; padding: 24px 16px !important; }
          .dari-step:nth-child(odd) { border-top: none; }
          .dari-step:nth-child(2) { border-left: 1px solid rgba(176,64,112,0.15) !important; }
          .dari-features { grid-template-columns: 1fr 1fr !important; }
          .dari-feature { border-left: none !important; border-top: 1px solid rgba(176,64,112,0.15) !important; padding: 20px 16px !important; }
          .dari-feature:nth-child(odd) { border-top: none; }
          .dari-feature:nth-child(2) { border-left: 1px solid rgba(176,64,112,0.15) !important; border-top: none !important; }

          .dari-proposito { padding: 60px 20px !important; }

          .dari-galeria-header { padding: 0 20px 36px !important; }
          .dari-galeria-grid { grid-template-columns: 1fr 1fr !important; }
          .dari-galeria-img { height: 280px !important; object-position: center center !important; }

          .dari-testimonials { padding: 48px 20px !important; }

          .dari-contato-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .dari-contato-section { padding: 48px 20px !important; }
          .dari-contato-info { grid-template-columns: 90px 1fr !important; }
          .dari-contato-btns { flex-direction: column !important; }
          .dari-contato-btns a { text-align: center !important; }

          .dari-footer-inner { flex-direction: column !important; gap: 20px !important; text-align: center !important; padding: 28px 20px !important; }
          .dari-footer-links { flex-wrap: wrap !important; justify-content: center !important; gap: 20px !important; }
        }

        @media (max-width: 480px) {
          .dari-steps { grid-template-columns: 1fr !important; }
          .dari-step { border-left: none !important; border-top: 1px solid rgba(176,64,112,0.15) !important; }
          .dari-step:first-child { border-top: none !important; }
          .dari-features { grid-template-columns: 1fr !important; }
          .dari-feature { border-left: none !important; border-top: 1px solid rgba(176,64,112,0.15) !important; }
          .dari-feature:first-child { border-top: none !important; }
          .dari-galeria-grid { grid-template-columns: 1fr !important; }
          .dari-galeria-img { height: 340px !important; }
        }
      `}</style>

      {/* ── LOADING ── */}
      {loading && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          backgroundColor: BG,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.6s ease',
          pointerEvents: fadeOut ? 'none' : 'all',
        }}>
          <img src={logoImg} alt="Dari Boutique" style={{ width: 180, height: 'auto', animation: 'dari-fade-in 0.8s ease forwards' }} />
          <div style={{ width: 120, height: 2, backgroundColor: 'rgba(176,64,112,0.15)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: '100%',
              background: 'linear-gradient(90deg, transparent, #c04478, transparent)',
              animation: 'dari-fade-in 1.4s linear infinite',
            }} />
          </div>
        </div>
      )}

      <div style={{ backgroundColor: BG, fontFamily: "'Jost', system-ui, sans-serif", color: '#2c1f18' }}>

        {/* ── BOTÃO FLUTUANTE WHATSAPP ── */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" title="Agendar pelo WhatsApp"
          style={{
            position: 'fixed', bottom: 28, right: 28, zIndex: 100,
            width: 52, height: 52, borderRadius: '50%',
            background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(176,64,112,0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(176,64,112,0.55)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(176,64,112,0.4)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.93c-1.83 0-3.63-.49-5.2-1.42l-.37-.22-3.83 1 1.02-3.72-.24-.38A9.93 9.93 0 0 1 2.07 12C2.07 6.52 6.52 2.07 12 2.07c2.65 0 5.14 1.03 7.01 2.9A9.88 9.88 0 0 1 21.93 12c0 5.48-4.45 9.93-9.93 9.93zm5.45-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="white"/>
          </svg>
        </a>

        {/* ── HEADER ── */}
        <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: BG, borderBottom: '1px solid rgba(176,64,112,0.12)' }}>
          <div className="dari-header-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
            <a href="#" className="dari-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={logoImg} alt="Dari Boutique" style={{ height: 56, width: 'auto', display: 'block' }} />
            </a>
            <nav className="dari-nav" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
              {['SOBRE', 'EXCLUSIVIDADE', 'A LOJA', 'CONTATO'].map(label => (
                <a key={label} href={`#${label.toLowerCase().replace(' ', '-')}`}
                  style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: '0.18em', color: '#6b5048', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#b04070')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b5048')}
                >{label}</a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', padding: '12px 22px',
                background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
                color: '#fff', fontFamily: "'Jost', sans-serif",
                fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
                textDecoration: 'none', textTransform: 'uppercase',
                boxShadow: '0 4px 16px rgba(176,64,112,0.38), 0 1px 4px rgba(176,64,112,0.22)',
                transition: 'box-shadow 0.2s, transform 0.15s', whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(176,64,112,0.52)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(176,64,112,0.38), 0 1px 4px rgba(176,64,112,0.22)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >AGENDAR SEU HORÁRIO</a>
            </nav>
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="dari-hero" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 24, textTransform: 'uppercase' }}>PONTA GROSSA · PR</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, lineHeight: 1.15, color: '#2c1f18', marginBottom: 24 }}>
              Vista-se de si mesma e descubra a{' '}
              <em style={{ fontStyle: 'italic', color: '#b04070' }}>sua melhor versão</em>.
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048', maxWidth: 460, marginBottom: 32 }}>
              Acreditamos que a roupa certa tem o poder de transformar o seu dia e elevar a sua autoestima. Na Dari, cada visita é pensada só para você.
            </p>
            {/* Disponibilidade */}
            <p className="dari-availability" style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 400, color: '#8a7570', letterSpacing: '0.03em', marginBottom: 24, fontStyle: 'italic' }}>
              Atendimento individual, um horário por vez — reserve o seu.
            </p>
            <div className="dari-hero-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
                color: '#fff', fontFamily: "'Jost', sans-serif",
                fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
                textDecoration: 'none', textTransform: 'uppercase',
                boxShadow: '0 4px 20px rgba(176,64,112,0.35)',
              }}>AGENDAR MEU HORÁRIO</a>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img className="dari-hero-img" src={heroImg} alt="Cliente na fachada da Dari Boutique"
              style={{ width: '100%', height: 560, objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div className="dari-hero-card" style={{
              position: 'absolute', bottom: -24, left: -24,
              background: '#fff', padding: '20px 24px', maxWidth: 260,
              boxShadow: '0 8px 32px rgba(44,31,24,0.1)',
            }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 15, lineHeight: 1.7, color: '#2c1f18' }}>
                "Sinta-se linda, leve e pronta para conquistar o mundo todos os dias."
              </p>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="dari-sobre" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <img className="dari-sobre-img" src={aboutImg} alt="Proprietária da Dari Boutique"
            style={{ width: '100%', height: 580, objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>SOBRE A DARI</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 400, color: '#2c1f18', marginBottom: 20, lineHeight: 1.3 }}>
              Moda como um ato de amor-próprio.
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(20px, 2vw, 22px)', lineHeight: 1.65, color: '#b04070', marginBottom: 28 }}>
              Vestir-se bem não é vaidade. É cuidado com quem você é.
            </p>
            <p style={{ fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048', marginBottom: 16 }}>
              A Dari Boutique nasceu em Ponta Grossa com um propósito claro: ajudar cada mulher a se sentir mais bonita, mais confiante e mais ela mesma através da forma como se veste.
            </p>
            <p style={{ fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048' }}>
              Cada peça é escolhida a dedo — vestidos, blusas e acessórios com caimento e qualidade que valorizam o seu corpo e a sua história. E cada visita acontece no seu tempo, sem pressa, sem disputar espaço com mais ninguém.
            </p>
          </div>
        </section>

        {/* ── O DIFERENCIAL ── */}
        <section id="exclusividade" className="dari-diferencial" style={{ backgroundColor: '#ede3db', padding: '80px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>O DIFERENCIAL</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#2c1f18', marginBottom: 16, lineHeight: 1.2 }}>
              A loja é sua, no seu horário.
            </h2>
            <p style={{ fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048', maxWidth: 520, marginBottom: 56 }}>
              Enquanto durar sua visita, a Dari é só sua — sem outras clientes, sem correria, com atendimento pensado exclusivamente para o seu estilo.
            </p>
            <div className="dari-diferencial-cards" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
              <div className="dari-diferencial-card" style={{ background: '#fff', padding: '48px 52px' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>SESSÃO PRIVATIVA · DARI BOUTIQUE</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 2.5vw, 30px)', fontWeight: 400, color: '#2c1f18', marginBottom: 16 }}>Reserve seu horário exclusivo</h3>
                <p style={{ fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048', marginBottom: 28 }}>
                  Você agenda o dia e a hora, e a loja fica reservada só para você durante toda a visita — com uma consultora dedicada a te ajudar a montar looks, provar com calma e escolher sem pressa.
                </p>
                {/* Disponibilidade + CTA */}
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 400, color: '#8a7570', fontStyle: 'italic', marginBottom: 20 }}>
                  Atendimento individual, um horário por vez — reserve o seu.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-block', padding: '14px 28px',
                  background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
                  color: '#fff', fontFamily: "'Jost', sans-serif",
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
                  textDecoration: 'none', textTransform: 'uppercase',
                  boxShadow: '0 4px 20px rgba(176,64,112,0.35)',
                }}>AGENDAR MEU HORÁRIO</a>
              </div>
              <div className="dari-diferencial-stat" style={{ background: '#e8d0d9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 80, fontWeight: 400, color: '#b04070', lineHeight: 1, marginBottom: 8 }}>1</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.3em', color: '#8a2f56', textTransform: 'uppercase', textAlign: 'center' }}>CLIENTE POR HORÁRIO</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="a-loja" className="dari-como" style={{ padding: '80px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>COMO FUNCIONA</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 400, color: '#2c1f18', marginBottom: 64, lineHeight: 1.2 }}>
              Do agendamento à experiência,<br />em quatro passos.
            </h2>
            <div className="dari-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 48 }}>
              {[
                { num: 'Passo um', title: 'Chame no WhatsApp ou Instagram', desc: 'Você entra em contato e conta um pouco do que procura.' },
                { num: 'Passo dois', title: 'Escolha seu horário', desc: 'Combinamos o dia e a hora ideais para a sua visita exclusiva.' },
                { num: 'Passo três', title: 'Visite com exclusividade', desc: 'A loja é só sua, com atendimento e curadoria dedicados.' },
                { num: 'Passo quatro', title: 'Saia radiante e confiante', desc: 'Com looks escolhidos com calma, e prontos para o seu dia.' },
              ].map((step, i) => (
                <div key={i} className="dari-step" style={{ padding: '32px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(176,64,112,0.15)' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 17, color: '#b04070', marginBottom: 14 }}>{step.num}</p>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 1.6vw, 19px)', fontWeight: 500, color: '#2c1f18', marginBottom: 12, lineHeight: 1.35 }}>{step.title}</h4>
                  <p style={{ fontSize: 'clamp(16px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.85, color: '#8a7570' }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="dari-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid rgba(176,64,112,0.15)' }}>
              {[
                { title: 'Atendimento exclusivo', desc: 'Horário reservado, sem dividir a loja com outras clientes.' },
                { title: 'Curadoria personalizada', desc: 'Peças pensadas para o seu estilo e o seu momento.' },
                { title: 'Ambiente acolhedor', desc: 'Um espaço leve e elegante, para você se sentir à vontade.' },
                { title: 'Novidades constantes', desc: 'Vestidos, blusas e acessórios renovados com frequência.' },
              ].map((feat, i) => (
                <div key={i} className="dari-feature" style={{ padding: '28px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(176,64,112,0.15)' }}>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 1.6vw, 18px)', fontWeight: 500, color: '#2c1f18', marginBottom: 10 }}>{feat.title}</h4>
                  <p style={{ fontSize: 'clamp(16px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.85, color: '#8a7570' }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOSSO PROPÓSITO ── */}
        <section className="dari-proposito" style={{ background: 'linear-gradient(135deg, #b04070 0%, #8a2f56 100%)', padding: '80px 32px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.7)', marginBottom: 28, textTransform: 'uppercase' }}>NOSSO PROPÓSITO</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: 400, color: '#fff', lineHeight: 1.25, maxWidth: 720, margin: '0 auto 24px' }}>
            Acreditamos que a roupa certa tem o poder de transformar o seu dia.
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.82)', maxWidth: 560, margin: '0 auto' }}>
            Cada mulher que entra na Dari sai um pouco mais confiante, um pouco mais leve, um pouco mais ela mesma. É isso que nos move todos os dias.
          </p>
        </section>

        {/* ── GALERIA ── */}
        <section style={{ padding: '80px 0 0' }}>
          <div className="dari-galeria-header" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 48px', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 16, textTransform: 'uppercase' }}>A LOJA</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 400, color: '#2c1f18' }}>
              Peças que te fazem sentir mais você.
            </h2>
          </div>
          <div className="dari-galeria-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {gallery.map((g, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                <img className="dari-galeria-img" src={g.src} alt={g.label}
                  style={{ width: '100%', height: 500, objectFit: 'cover', objectPosition: g.pos, display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(44,31,24,0.55))', padding: '32px 16px 16px' }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase' }}>{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <Testimonials />

        {/* ── CONTATO ── */}
        <section id="contato" className="dari-contato-section" style={{ backgroundColor: '#ede3db', padding: '80px 32px' }}>
          <div className="dari-contato-inner" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>CONTATO E LOCALIZAÇÃO</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: '#2c1f18', marginBottom: 24, lineHeight: 1.2 }}>
                Vamos marcar sua hora?
              </h2>
              <p style={{ fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048', marginBottom: 40 }}>
                Fale com a gente e escolha o melhor horário para viver a experiência Dari, com toda exclusividade.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                {[
                  { label: 'ENDEREÇO', value: 'R. Carlos de Laet, 131 — Oficinas\nPonta Grossa, PR · 84035-440' },
                  { label: 'WHATSAPP', value: '(42) 99923-7535' },
                  { label: 'INSTAGRAM', value: '@dari.boutique' },
                ].map(item => (
                  <div key={item.label} className="dari-contato-info" style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16 }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.22em', color: '#b04070', textTransform: 'uppercase', paddingTop: 2 }}>{item.label}</p>
                    <p style={{ fontSize: 'clamp(16px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.75, color: '#2c1f18', whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="dari-contato-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                  padding: '14px 24px',
                  background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
                  color: '#fff', fontFamily: "'Jost', sans-serif",
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
                  textDecoration: 'none', textTransform: 'uppercase',
                  boxShadow: '0 4px 16px rgba(176,64,112,0.38)',
                }}>AGENDAR MEU HORÁRIO</a>
              </div>
            </div>
            <div>
              <iframe
                title="Dari Boutique — Ponta Grossa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.97!2d-50.163!3d-25.094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Carlos+de+Laet%2C+131+-+Oficinas%2C+Ponta+Grossa!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: BG, borderTop: '1px solid rgba(176,64,112,0.12)' }}>
          <div className="dari-footer-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 500, color: '#2c1f18' }}>Dari Boutique</p>
            <div className="dari-footer-links" style={{ display: 'flex', gap: 32 }}>
              {[
                { label: 'INSTAGRAM', href: IG_LINK, blank: true },
                { label: 'WHATSAPP', href: WA_LINK, blank: true },
                { label: 'VOLTAR AO TOPO', href: '#', blank: false },
              ].map(({ label, href, blank }) => (
                <a key={label} href={href} {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', color: '#6b5048', textDecoration: 'none', textTransform: 'uppercase' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#b04070')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b5048')}
                >{label}</a>
              ))}
            </div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: '#8a7570' }}>© 2026 Dari Boutique — Ponta Grossa, PR</p>
          </div>
        </footer>

      </div>
    </>
  )
}
