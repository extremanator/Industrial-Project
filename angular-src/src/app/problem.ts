export class Problem {
  name: string;
  difficulty: string;
  points: number;
  category: string[];
  paragraph: string;
  code: string;
  type: string;
  tests: object[];
  solutions: string[];
  solved_by: Map<string, object>;
  num_solved: number;
  num_attempted: number;
}
