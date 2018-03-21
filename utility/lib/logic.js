/**
 * Track the trade of a elecbill from one trader to another
 * @param {org.acme.biznet.Trade_Elecbill} tradeelecbill - the tradeelecbill to be processed
 * @transaction
 */
function tradeelecbill(tradeelecbill) {
    tradeelecbill.elecbill.owner = tradeelecbill.newOwner;
    return getAssetRegistry('org.acme.biznet.Elecbill')
        .then(function (assetRegistry) {
            return assetRegistry.update(tradeelecbill.elecbill);
        });
}
