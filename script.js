function calculateDowry(event) {
    event.preventDefault();

    // Multipliers based on news-derived factors
    const multipliers = {
        profession: { high_status: 2.5, mid_tier: 1.5, low_tier: 1.0 },
        education: { advanced: 2.0, bachelor: 1.5, high_school: 1.0 },
        family_status: { affluent: 2.5, middle_class: 1.5, lower_income: 1.0 },
        region: { urban: 1.5, rural: 1.0 },
        vehicle: { none: 0, mid_range_car: 1000000, luxury_car: 3000000 }
    };

    // Get form inputs
    const profession = document.getElementById('profession').value;
    const education = document.getElementById('education').value;
    const family_status = document.getElementById('family_status').value;
    const region = document.getElementById('region').value;
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const vehicle = document.getElementById('vehicle').value;
    const gold = parseFloat(document.getElementById('gold').value) || 0;
    const items = parseFloat(document.getElementById('items').value) || 0;

    // Validate inputs
    const resultDiv = document.getElementById('result');
    if (!profession || !education || !family_status || !region || !vehicle) {
        resultDiv.innerHTML = 'Please fill all required fields.';
        return;
    }

    // Calculate dowry
    const baseValue = 100000; // Base value in INR
    const dowry = (baseValue * 
                   multipliers.profession[profession] * 
                   multipliers.education[education] * 
                   multipliers.family_status[family_status] * 
                   multipliers.region[region]) + 
                   cash + 
                   multipliers.vehicle[vehicle] + 
                   (gold * 20000) + // Rs 20,000 per gram (2025 estimate)
                   (items * 50000); // Rs 50,000 per item

    // Display result
    resultDiv.innerHTML = `Estimated Dowry: ₹${dowry.toLocaleString('en-IN')}<br><br>
        <strong>Warning:</strong> Padhai kr le, Ye sab dekhne se ghar nhi chalta.`;
}
