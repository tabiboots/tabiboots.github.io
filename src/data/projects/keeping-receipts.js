import { cdn } from '../../lib/cloudinary'


export default {
  slug: 'keeping-receipts',
  title: 'Keeping Receipts',
  year: '2025',
  medium: 'Thermal printer, mobile phone, custom software',
  dimensions: 'Variable',
  venue: 'Integrated Design Thesis Show',
  cover: { kind: 'image', src: cdn('q_auto/f_auto/keeping-receipts-cover-2_gcrked'), ratio: '4/3', objectPosition: 'center top' },
  heroRatio: '16/9',
  summary: 'Giving physical form to Doomscrolling.',
  blocks: [
    { kind: 'lede', text: 'How far do I scroll in a day? What does it cost me?' },
    { kind: 'essay', body:['Sparked by a desire to reframe screen time and give physical form to media\n' +
      'overconsumption, Keeping Receipts is a sculptural piece that physically\n' +
      'documents every social media post a viewer scrolls by in real time. By\n' +
      'converting intangible digital excess into an accumulating stream of thermal\n' +
      'paper, the work exposes the volume, velocity, and banality of the content\n' +
      'we ingest without noticing. What is usually invisible becomes permanently\n' +
      'material, inviting the viewer to confront the impacts of their own attention\n' +
      'economy.', 'The piece also functions as a contemporary archive, capturing fleeting\n' +
      'interactions that platforms are designed to erase or replace instantly. In\n' +
      'doing so, it questions how memory, value, and personal agency are shaped\n' +
      'by algorithmic systems built to maximize engagement rather than reflection.']},
    {
      kind: 'image-grid',
      images: [
        { kind: 'image', src: cdn('q_auto/f_auto/keeping-receipts-gallery1_mpwkel'), ratio: '3/2', caption: 'Receipts piled on the floor', style: { height: 'auto' } },
      ],
    },
    { kind: 'section', heading: 'Process' },
    {
      kind: 'image-grid',
      images: [
        { kind: 'image', src: cdn('q_auto/f_auto/keeping-receipts-process1_dvo7iw'), ratio: '17/22', caption: 'Process receipt, part 1', style: { height: 'auto' } },
        { kind: 'image', src: cdn('q_auto/f_auto/keeping-receipts-process2_do9iho'), ratio: '17/22', caption: 'Process receipt, part 2', style: { height: 'auto' } },
        { kind: 'image', src: cdn('q_auto/f_auto/keeping-receipts-process3_zdqnna'), ratio: '17/22', caption: 'Process receipt, part 3', style: { height: 'auto' } },
      ],
    },
  ],
}
