const linkRepository = require('../repositories/linkRepository');

async function getLinksForRestaurantId(restaurant_id) {
    const linksByRestaurantId = await linkRepository.getLinksByRestaurantName(restaurant_id);
    if (linksByRestaurantId) {
        const links = [];
        for (const link of linksByRestaurantId) {
            const providerImg = await linkRepository.getProviderImageById(link.provider_id);
            if (providerImg) {
                links.push({
                    id: link.link_id,
                    url: link.link_url,
                    src: providerImg,
                });
            }
        }
        return links;
    }
    return null;
}

module.exports = {
    getLinksForRestaurantId
};