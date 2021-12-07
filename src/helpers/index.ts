interface subCategory {
    name: string;
    id: number;
    productIds: number[];
}

interface subCategories extends Array<subCategory> { }

export const filterSubCategories = (subcategories: subCategories) => {
    return subcategories.map((v) => v.name);
}