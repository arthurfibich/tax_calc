export type OptionsType = {firstName: string, lastName: string, category: string}


export class UbiCalculator{
    getCurrentIncomeTax(netIncome:number, taxClass:number, numChildren:number) :number {
        return netIncome * taxClass * numChildren; //TODO:implement getCurrentIncomeTax function
    }
    getInfluenceOnHouseholds(options: OptionsType){
        return JSON.stringify(options);
    }
}
