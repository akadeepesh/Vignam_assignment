import InstaImg from "./assests/instagram.svg";
import LinkedImg from "./assests/linkedin_logo-removebg-preview.png";
import FacebookImg from "./assests/facebook_logo-removebg-preview.png";

export interface Link {
    icon: string;
    label: string;
    logo?: string; // Optional, since not all items have a logo
}

export const allIngredients: Link[] = [
    {
        icon: "🥂",
        logo: InstaImg, // Reference the imported image
        label: "Instagram Post",
    },
    {
        icon: "🥬",
        logo: LinkedImg, // Reference the imported image
        label: "LinkedIn Post",
    },
    {
        icon: "🧀",
        logo: FacebookImg, // Reference the imported image
        label: "FaceBook Post",
    },
    {
        icon: "🥕",
        label: "Instagram Story", // No logo for this item
    },
];




const [InstaPost, LinkedInPost, FaceBookPost, InstaStory] = allIngredients;
export const initialTabs = [InstaPost, LinkedInPost, FaceBookPost, InstaStory];

export function getNextIngredient(
    ingredients: Link[]
): Link | undefined {

    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}
