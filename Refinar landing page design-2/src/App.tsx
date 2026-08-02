import logoImg from '@/imports/images.jpeg'
import heroImg from '@/imports/Screenshot_2026-08-02_at_14.24.27.png'
import aboutImg from '@/imports/Screenshot_2026-08-01_at_20.03.18.png'
import gallery1 from '@/imports/Screenshot_2026-08-01_at_20.02.58.png'
import gallery2 from '@/imports/Screenshot_2026-08-01_at_20.02.42.png'
import gallery3 from '@/imports/Screenshot_2026-08-02_at_14.23.47.png'
import gallery4 from '@/imports/Screenshot_2026-08-01_at_20.04.32.png'

const BG = '#f5ede6'
const WA_LINK = 'https://wa.me/5542999237535?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20exclusivo%20na%20Dari%20Boutique%20%F0%9F%98%8A'
const IG_LINK = 'https://www.instagram.com/dari.boutique/'

export default function App() {
  const gallery = [
    { src: gallery1, label: 'CONFIANÇA EM CADA LOOK' },
    { src: gallery2, label: 'PEÇAS DA COLEÇÃO' },
    { src: gallery3, label: 'CAIMENTO E ESTILO' },
    { src: gallery4, label: 'FACHADA DARI BOUTIQUE' },
  ]

  return (
    <div style={{ backgroundColor: BG, fontFamily: "'Jost', system-ui, sans-serif", color: '#2c1f18' }}>

      {/* ── HEADER ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: BG,
        borderBottom: '1px solid rgba(176,64,112,0.12)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo oficial — mix-blend-mode:multiply dissolve o fundo branco sobre o off-white */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={logoImg}
              alt="Dari Boutique"
              style={{
                height: 56,
                width: 'auto',
                display: 'block',
                mixBlendMode: 'multiply',
                backgroundColor: BG,
              }}
            />
          </a>

          {/* Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {['SOBRE', 'EXCLUSIVIDADE', 'A LOJA', 'CONTATO'].map(label => (
              <a key={label} href={`#${label.toLowerCase().replace(' ', '-')}`}
                style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: '0.18em', color: '#6b5048', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#b04070')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b5048')}
              >{label}</a>
            ))}

            {/* CTA — gradiente rosa, sombra glow, hover com elevação */}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '12px 22px',
              background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
              color: '#fff',
              fontFamily: "'Jost', sans-serif",
              fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
              textDecoration: 'none', textTransform: 'uppercase',
              boxShadow: '0 4px 16px rgba(176,64,112,0.38), 0 1px 4px rgba(176,64,112,0.22)',
              transition: 'box-shadow 0.2s, transform 0.15s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(176,64,112,0.52)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(176,64,112,0.38), 0 1px 4px rgba(176,64,112,0.22)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              AGENDAR SEU HORÁRIO
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(13px, 1.5vw, 13px)', fontWeight: 500, letterSpacing: '0.3em', color: '#b04070', marginBottom: 24, textTransform: 'uppercase' }}>PONTA GROSSA · PR</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 400, lineHeight: 1.15, color: '#2c1f18', marginBottom: 24 }}>
            Vista-se de si mesma e descubra a{' '}
            <em style={{ fontStyle: 'italic', color: '#b04070' }}>sua melhor versão</em>.
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048', maxWidth: 460, marginBottom: 40 }}>
            Acreditamos que a roupa certa tem o poder de transformar o seu dia e elevar a sua autoestima. Na Dari, cada visita é pensada só para você.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
              color: '#fff', fontFamily: "'Jost', sans-serif",
              fontSize: 11, fontWeight: 600, letterSpacing: '0.2em',
              textDecoration: 'none', textTransform: 'uppercase',
              boxShadow: '0 4px 20px rgba(176,64,112,0.35)',
            }}>AGENDAR MEU HORÁRIO</a>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 28px',
              border: '1px solid rgba(176,64,112,0.4)', color: '#b04070',
              fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.2em',
              textDecoration: 'none', textTransform: 'uppercase', background: 'transparent',
            }}>SAIBA MAIS</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src={heroImg} alt="Mulher na fachada da Dari Boutique" style={{ width: '100%', height: 560, objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          <div style={{
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
      <section id="sobre" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <img src={aboutImg} alt="Proprietária da Dari Boutique" style={{ width: '100%', height: 580, objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
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
      <section id="exclusividade" style={{ backgroundColor: '#ede3db', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>O DIFERENCIAL</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#2c1f18', marginBottom: 16, lineHeight: 1.2 }}>
            A loja é sua, no seu horário.
          </h2>
          <p style={{ fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048', maxWidth: 520, marginBottom: 56 }}>
            Enquanto durar sua visita, a Dari é só sua — sem outras clientes, sem correria, com atendimento pensado exclusivamente para o seu estilo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
            <div style={{ background: '#fff', padding: '48px 52px' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>SESSÃO PRIVATIVA · DARI BOUTIQUE</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 2.5vw, 30px)', fontWeight: 400, color: '#2c1f18', marginBottom: 20 }}>Reserve seu horário exclusivo</h3>
              <p style={{ fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: '#6b5048' }}>
                Você agenda o dia e a hora, e a loja fica reservada só para você durante toda a visita — com uma consultora dedicada a te ajudar a montar looks, provar com calma e escolher sem pressa.
              </p>
            </div>
            <div style={{ background: '#e8d0d9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 80, fontWeight: 400, color: '#b04070', lineHeight: 1, marginBottom: 8 }}>1</p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.3em', color: '#8a2f56', textTransform: 'uppercase', textAlign: 'center' }}>CLIENTE POR HORÁRIO</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="a-loja" style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 20, textTransform: 'uppercase' }}>COMO FUNCIONA</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#2c1f18', marginBottom: 64, lineHeight: 1.2 }}>
            Do agendamento à experiência,<br />em quatro passos.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 48 }}>
            {[
              { num: 'Passo um', title: 'Chame no WhatsApp ou Instagram', desc: 'Você entra em contato e conta um pouco do que procura.' },
              { num: 'Passo dois', title: 'Escolha seu horário', desc: 'Combinamos o dia e a hora ideais para a sua visita exclusiva.' },
              { num: 'Passo três', title: 'Visite com exclusividade', desc: 'A loja é só sua, com atendimento e curadoria dedicados.' },
              { num: 'Passo quatro', title: 'Saia radiante e confiante', desc: 'Com looks escolhidos com calma, e prontos para o seu dia.' },
            ].map((step, i) => (
              <div key={i} style={{ padding: '32px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(176,64,112,0.15)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 17, color: '#b04070', marginBottom: 14 }}>{step.num}</p>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 1.6vw, 19px)', fontWeight: 500, color: '#2c1f18', marginBottom: 12, lineHeight: 1.35 }}>{step.title}</h4>
                <p style={{ fontSize: 'clamp(16px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.85, color: '#8a7570' }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid rgba(176,64,112,0.15)' }}>
            {[
              { title: 'Atendimento exclusivo', desc: 'Horário reservado, sem dividir a loja com outras clientes.' },
              { title: 'Curadoria personalizada', desc: 'Peças pensadas para o seu estilo e o seu momento.' },
              { title: 'Ambiente acolhedor', desc: 'Um espaço leve e elegante, para você se sentir à vontade.' },
              { title: 'Novidades constantes', desc: 'Vestidos, blusas e acessórios renovados com frequência.' },
            ].map((feat, i) => (
              <div key={i} style={{ padding: '28px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(176,64,112,0.15)' }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 1.6vw, 18px)', fontWeight: 500, color: '#2c1f18', marginBottom: 10 }}>{feat.title}</h4>
                <p style={{ fontSize: 'clamp(16px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.85, color: '#8a7570' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSSO PROPÓSITO ── */}
      <section style={{ background: 'linear-gradient(135deg, #b04070 0%, #8a2f56 100%)', padding: '80px 32px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.7)', marginBottom: 28, textTransform: 'uppercase' }}>NOSSO PROPÓSITO</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 400, color: '#fff', lineHeight: 1.25, maxWidth: 720, margin: '0 auto 24px' }}>
          Acreditamos que a roupa certa tem o poder de transformar o seu dia.
        </h2>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(17px, 1.5vw, 18px)', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.82)', maxWidth: 560, margin: '0 auto' }}>
          Cada mulher que entra na Dari sai um pouco mais confiante, um pouco mais leve, um pouco mais ela mesma. É isso que nos move todos os dias.
        </p>
      </section>

      {/* ── GALERIA ── */}
      <section style={{ padding: '80px 0 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 48px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, letterSpacing: '0.28em', color: '#b04070', marginBottom: 16, textTransform: 'uppercase' }}>A LOJA</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 400, color: '#2c1f18' }}>
            Peças que te fazem sentir mais você.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {gallery.map((g, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
              <img src={g.src} alt={g.label}
                style={{ width: '100%', height: 500, objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(44,31,24,0.55))', padding: '32px 16px 16px' }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase' }}>{g.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" style={{ backgroundColor: '#ede3db', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
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
                <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16 }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.22em', color: '#b04070', textTransform: 'uppercase', paddingTop: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 'clamp(16px, 1.3vw, 17px)', fontWeight: 300, lineHeight: 1.75, color: '#2c1f18', whiteSpace: 'pre-line' }}>{item.value}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                padding: '14px 24px',
                background: 'linear-gradient(135deg, #c04478 0%, #8a2f56 100%)',
                color: '#fff', fontFamily: "'Jost', sans-serif",
                fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
                textDecoration: 'none', textTransform: 'uppercase',
                boxShadow: '0 4px 16px rgba(176,64,112,0.38)',
              }}>AGENDAR MEU HORÁRIO</a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer" style={{
                padding: '14px 24px',
                border: '1px solid rgba(176,64,112,0.4)', color: '#b04070',
                fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.18em',
                textDecoration: 'none', textTransform: 'uppercase', background: 'transparent',
              }}>SAIBA MAIS</a>
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
      <footer style={{ backgroundColor: BG, borderTop: '1px solid rgba(176,64,112,0.12)', padding: '28px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 500, color: '#2c1f18' }}>Dari Boutique</p>
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'INSTAGRAM', href: IG_LINK, blank: true },
              { label: 'WHATSAPP', href: WA_LINK, blank: true },
              { label: 'VOLTAR AO TOPO', href: '#', blank: false },
            ].map(({ label, href, blank }) => (
              <a key={label} href={href} {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', color: '#6b5048', textDecoration: 'none', textTransform: 'uppercase' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#b04070')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b5048')}
              >{label}</a>
            ))}
          </div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 300, color: '#8a7570' }}>© 2026 Dari Boutique — Ponta Grossa, PR</p>
        </div>
      </footer>

    </div>
  )
}
