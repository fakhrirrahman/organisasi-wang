export interface ProfileData {
  name: string;
  fullName: string;
  tagline: string;
  foundedDate: string;
  founder: {
    name: string;
    origin: string;
    status: string;
  };
  location: {
    city: string;
    province: string;
  };
  membership: {
    dominant: string;
    description: string;
  };
  purpose: {
    coreGoal: string;
    backgroundReason: string;
  };
  contact: {
    whatsapp: string;
    whatsappClean: string;
    whatsappLink: string;
  };
}
