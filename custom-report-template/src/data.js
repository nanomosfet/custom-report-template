var data = {
    sections: [
        {
            id: 0,
            name: "Patient",
            subSections: [
                {
                    name: "Patient",
                    inputs: [
                        {
                            name: "age",
                            label: "Age",
                            type: "text",
                        },
                        {
                            name: "gender",
                            label: "Gender",
                            type: "radio",
                            choices: ["Male", "Female"]
                        }
                    ]
                }
            ]
           
        },
        {
            id: 1,
            name: "Past Medical History",
            subSections: [
                {
                    name: "Patient",
                    inputs: [
                        {
                            name: "age",
                            label: "Age",
                            type: "text",
                        },
                        {
                            name: "gender",
                            label: "Gender",
                            type: "radio",
                            choices: ["Male", "Female"]
                        }
                    ]
                },
                {
                    name: "DGAF",
                    inputs: ["text", "text"]
                }
            ]
        },
    ]
}

export default data;