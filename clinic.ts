export const clinic = {
  name: 'Aurora Dental Studio', // NOME DEMONSTRATIVO: substituir antes de publicar
  tagline: 'Odontologia com cuidado e precisão',
  city: '', address: '', hours: '', phone: '', whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  email: '', instagram: '', mapsUrl: '',
  legalName: '', responsibleName: '', responsibleCro: '', croJurisdiction: '',
  description: 'Uma experiência odontológica que une atenção individualizada, tecnologia e acolhimento.',
  // Usar somente fotografias licenciadas ou próprias antes de publicar.
  images: {
    hero: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85',
    clinic: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1300&q=80',
    reception: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    consultation: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    planning: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
  },
} as const;
export const isConfigured = Boolean(clinic.whatsapp && clinic.address && clinic.responsibleCro);
