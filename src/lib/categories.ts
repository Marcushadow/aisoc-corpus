export const TOPIC_CATEGORIES = [
  { id: "classical-ml", label: "Classical ML", color: "#ccff00" },
  { id: "deep-learning", label: "Deep Learning", color: "#6366f1" },
  { id: "generative", label: "Generative", color: "#8b5cf6" },
  {
    id: "reinforcement-learning",
    label: "Reinforcement Learning",
    color: "#f59e0b",
  },
  { id: "world-modelling", label: "World Modelling", color: "#06b6d4" },
] as const;

export type TopicCategoryId = (typeof TOPIC_CATEGORIES)[number]["id"];

export const CATEGORY_LABELS = Object.fromEntries(
  TOPIC_CATEGORIES.map((category) => [category.id, category.label]),
) as Record<TopicCategoryId, string>;

export const CATEGORY_COLORS = Object.fromEntries(
  TOPIC_CATEGORIES.map((category) => [category.id, category.color]),
) as Record<string, string>;
