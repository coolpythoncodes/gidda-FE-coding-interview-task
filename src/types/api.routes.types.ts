export interface GetSummaryResponse {
    statusCode: number;
    message: string;
    value: Record<string, number>;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface GetDefaultsResponse {
    statusCode: number;
    message: string;
    value: {
        pageNumber: number;
        pageSize: number;
        totalPages: number;
        totalRecords: number;
        data: DefaultDatum[];
    };
}

export interface DefaultDatum {
    rrr: null;
    transactionType: string;
    amount: number;
    organizationAmount: number;
    giddaaAmount: number;
    defaultAmount: number;
    application: Application;
    customer: Customer;
    mortgagePlan: MortgagePlan;
    house: House;
    dueDate: Date;
    dateOfPayment: Date;
    isPaid: boolean;
}

export interface Application {
    applicationId: string;
    status: null;
}

export interface Customer {
    customerId: string;
    name: null;
    firstName: string;
    lastName: string;
    email: null;
    age: number;
    income: number;
    phoneNumber: null;
    gender: null;
    profilePicture: null;
    dateOfBirth: Date;
    withInNigeria: boolean;
    affordability: null;
}

export interface House {
    houseId: string;
    name: null;
    stateName: string;
    cityName: string;
    completionStatus: null;
    address: null;
    type: string;
    organization: null;
    images: null;
}

export interface MortgagePlan {
    mortgagePlanId: string;
    name: string;
    type: null;
}



export interface GetSuccessfullResponse {
    statusCode: number;
    message: string;
    value: {
        pageNumber: number;
        pageSize: number;
        totalPages: number;
        totalRecords: number;
        data: GetSuccessfullDatum[];
    };
}


export interface GetSuccessfullDatum {
    rrr: string;
    transactionType: string;
    amount: number;
    organizationAmount: number;
    giddaaAmount: number;
    defaultAmount: number;
    application: Application;
    customer: Customer;
    mortgagePlan: MortgagePlan;
    house: House;
    dueDate: Date;
    dateOfPayment: Date;
    isPaid: boolean;
}

export interface GetExpectedResponse {
    statusCode: number;
    message: string;
    value: {
        pageNumber: number;
        pageSize: number;
        totalPages: number;
        totalRecords: number;
        data: GetExpectedDatum[];
    };
}

export interface GetExpectedDatum {
    rrr: null;
    transactionType: string;
    amount: number;
    organizationAmount: number;
    giddaaAmount: number;
    defaultAmount: number;
    application: Application;
    customer: Customer;
    mortgagePlan: MortgagePlan;
    house: House;
    dueDate: Date;
    dateOfPayment: Date;
    isPaid: boolean;
}






