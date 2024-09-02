export interface Movie {
  id: number;
  title: string;
  rating: number;
  detail: string;
  imgSrc: string;
}

export interface movieRowProbs {
  id: number;
  title: string;
  rating: number;
  number: number;
  detail?: string;
}

export interface movieIdPageParams {
  params: {
    id: string;
  };
}

export interface footerProps  {
  fullName : string;
  studentId: string;
  year: string;
  // define props list here
}

export interface HeaderProps {
  header: string;

  // define props list here
}