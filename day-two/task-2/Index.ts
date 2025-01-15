function transformData(source: SourceData): TargetData {
    return {
        id: source.user_id,
        name: source.full_name, 
        phone: source.contact.phone, 
        email: source.contact.email, 
        location: `${source.address.city}, ${source.address.zip}`,
        status: source.is_active ? "active" : "inactive"
    };
}

type SourceData = {
    user_id: string;
    full_name: string;
    contact: {
        phone: string;
        email: string;
    };
    address: {
        city: string;
        zip: string;
    };
    is_active: boolean;
};

type TargetData = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
};

const source: SourceData = {
    user_id: "3",
    full_name: "Vika Lukash",
    contact: {
        phone: "88005553535",
        email: "vlukashh@puk.com",
    },
    address: {
        city: "Moscow",
        zip: "777",
    },
    is_active: false,
};

const target = transformData(source);

console.log(target);     
