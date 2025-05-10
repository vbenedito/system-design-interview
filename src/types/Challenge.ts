export interface Challenge {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
}
