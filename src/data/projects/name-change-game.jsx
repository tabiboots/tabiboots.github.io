import { cdn } from '../../lib/cloudinary'


export default {
  slug: 'name-change-game',
  title: 'The New York Name Change Game',
  year: '2026',
  medium: 'Web Art and Woodworking',
  dimensions: 'Variable',
  venue: 'Parsons: Visibilizing Care Festival',
  cover: { kind: 'image', src: cdn('c_pad,ar_3:2,b_auto/q_auto/f_auto/new-york-name-change-game-cover_lpqcz3'), ratio: '3/2' },
  summary: 'A gamified version of the legal form required to change your name.',
  blocks: [
    { kind: 'lede', text: 'Playfulness can cut through the drag of bureaucracy.' },
    {
      kind: 'essay',
      body: [
        <>{'Inspired by MSCHF’s '}
        <a href="https://taxheaven3000.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Tax Heaven 3000</a>
        {`, this website is an interactive,
        text based game that guides a player narratively through the New York name change petition
        form. Grounded in community research, this project aims to solve the pain point that many queer
        individuals face of the daunting process that is legally changing your name. Through enacting play,
        I aim to make this process more approachable by turning it into an interactive, 15 minute guided experience.
        The game asks for the required information as it goes, storing answers only in the player’s browser.
        Nothing is ever sent to a server, a deliberate choice given how sensitive this information can be. At the
        end, it returns a filled PDF ready to be printed and submitted at a courthouse to begin a petition.`}</>,
      ],
    },
    {
      kind: 'image-pair',
      images: [
        { kind: 'image', src: cdn('q_auto/f_auto/new-york-name-change-game-gallery1_fmplns'), ratio: '1/1', caption: 'The game has a printer next to it, set up to auto-print a completed petition on game completion' },
        { kind: 'image', src: cdn('q_auto/f_auto/new-york-name-change-game-gallery2_o9gwvy'), ratio: '1/1', caption: 'A player seated at the arcade cabinet' },
      ],
    },
    {
      kind: 'essay',
      body: [
        <span style={{ display: 'block', paddingTop: 24 }}>{`I initially made this project in the fall of 2024 as my first exploration into web art and coding.
        It was just as much a learning experience as it was a project to showcase and deploy. At that time,
        the project was just a web game. I advertised it with flyers on the street and connected with law
        students at Pace who host `}
        <a href="https://www.pflagnyc.org/name-and-gender-marker-change-events/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>name change assistance events</a>
        {`, who added the game to their resource list. I revisited this project in 2026 when I was asked to display it at the `}
        <a href="https://event.newschool.edu/visualizingcarefestivalsymposi" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Visibilizing Care Festival</a>
        {` at Parsons. I wanted to use this opportunity to fully realize my vision for the game with an arcade cabinet
        and a printer that automatically prints the completed petition when the game ends.`}</span>,
      ],
    },
    { kind: 'section', heading: 'Process' },
    {
      kind: 'essay',
      body: [
        `I began by making a 3D sketch of the arcade cabinet, planning its dimensions around the computer
        monitor I would be using for the screen. As I am not trained in woodworking, being able to iterate on
        the design digitally and have the dimensions of each piece readily available was incredibly helpful.
        I then constructed the arcade cabinet, painted it with chalkboard paint, and drew decorative designs on
        the body with chalk.`,
      ],
    },
    {
      kind: 'image-grid',
      images: [
        { kind: 'image', src: cdn('c_pad,ar_3:4,b_auto/q_auto/f_auto/nyncg_process_1_okrqzy'), ratio: '3/4', caption: 'Initial 3D Mockup', style: { height: 'auto' } },
        { kind: 'image', src: cdn('c_limit,w_2000/q_auto/f_auto/nyncg_process_2_jp74jn'), ratio: '3/4', caption: 'Building the Arcade Cabinet', style: { height: 'auto' } },
        { kind: 'image', src: cdn('c_pad,ar_3:4,b_auto/q_auto/f_auto/nyncg_process_3_avy8ya'), ratio: '3/4', caption: 'Applying Chalkboard Paint to the Cabinet', style: { height: 'auto' } },
      ],
    },
    {
      kind: 'essay',
      body: [
        <span style={{ display: 'block', paddingTop: 24 }}>{`Next, I went back to the code for the web game and
        changed some behaviors so it would function in its new environment. I ran the game on a Raspberry Pi that
        I kiosk-locked so viewers couldn't access the file system or the internet. I also implemented a timeout
        to restart the game in case someone left midway through, and a script on the Raspberry Pi to automatically
        print the petition once the device downloaded the filled-out PDF.`}</span>,
        `I chose to work in a pixel art style for two reasons. As someone new to coding and illustration at the
        time, it gave me a visual language that was approachable to learn and quick to iterate on. It was also a
        nod to games like Undertale and Stardew Valley, which have resonated deeply within queer communities and
        shaped how many of us think about play, comfort, and belonging.`,
      ],
    },
    {
      kind: 'image-pair',
      images: [
        { kind: 'image', src: cdn('q_auto/f_auto/new-york-name-change-game-gallery4_dabtyn'), ratio: '1220/1522', caption: 'Still from The New York Name Change Game', style: { height: 'auto' } },
        { kind: 'image', src: cdn('c_pad,ar_1220:1522,b_auto/q_auto/f_auto/nyncg_process_4_vujcje'), ratio: '1220/1522', caption: 'Sprite sheet for a broken form field the player has to fix', style: { height: 'auto', imageRendering: 'pixelated' } },
      ],
    },
    {
      kind: 'essay',
      body: [
        <span style={{ display: 'block', paddingTop: 24 }}>{`This project is still looking for a more permanent home, but until
        then it will always be accessible on the web. Click below to try out the game for yourself!`}</span>,
        <a
          href="https://tabicass.com/namechange/"
          target="_blank"
          rel="noreferrer"
          className="mono"
          style={{ display: 'inline-block', padding: '12px 20px', border: '1px solid var(--accent)', color: 'var(--accent)', textDecoration: 'none' }}
        >
          Play the game →
        </a>,
      ],
    },
    {
      kind: 'credits',
      title: 'Tech Stack',
      rows: [
        { label: 'Built with', value: 'HTML, CSS, JavaScript' },
        { label: 'Animation', value: 'GSAP' },
        { label: 'PDF generation', value: 'pdf-lib' },
        { label: 'Hardware', value: 'Raspberry Pi, monitor, printer' },
      ],
    },
    {
      kind: 'credits',
      title: 'special thanks',
      rows: [{ label: 'Advising', value: 'Laura Nova' },
                              { label: 'Installation Support', value: 'Lacey Blaine' },
                              { label: 'Coding Guidance', value: 'Rory Solomon' }]
    },
  ],
  links: [
    { label: 'Play the game', href: 'https://tabicass.com/namechange/' },
  ],
}
