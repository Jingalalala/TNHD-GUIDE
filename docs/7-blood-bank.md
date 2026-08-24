# Blood Bank, Donation & Lab Analysis Protocol

The **Thalainagaram Health Department (TNHD) Blood Bank & Laboratory System** manages blood donations, blood group testing, certificate issuance, and emergency blood bag administration for patient revivals.

---

> **🚨 CRITICAL EMS REQUIREMENT:**
> **Blood Bags are strictly required for patient revivals!** A defibrillator or medkit alone is insufficient for critical patients — medics must carry and administer compatible blood bags to successfully revive patients.

---

## 1. 🩸 Complete Blood Donation & Analysis Workflow

1. **Request Blood Container:** Medics must request and carry a **Blood Container** from Blood Bank storage to load and transport blood bags.
2. **Collect Blood Sample:** Use a **Syringe** ($30 from EMS Shop) to draw a blood sample from the patient/donor.
3. **Go to Hospital Lab:** Transport the sample to the hospital laboratory station and run the **Blood Group Analysis**.
4. **Issue Certificate:** Generate the official **Blood Group Certificate** displaying blood type (O+, O-, A+, A-, B+, B-, AB+, AB-) and hand it to the patient.
5. **Deposit & Store Bags:** Deposit analyzed blood bags into the hospital **Blood Bank Storage** for emergency shift availability.

---

## 2. 🏦 Blood Bank Storage & Container Rules

> **⚠️ Container Prerequisite:** *"No Blood Container carried — bags can't be loaded until you have one."* Always click **`[Request Blood Container]`** inside the Blood Bank menu before attempting to withdraw or deposit blood bags.

### Available Blood Types in Stock:
* 🔴 **O+ Blood Bags** (Universal donor for positive blood types)
* 🔴 **O- Blood Bags** (Universal donor for all blood types)
* 🔵 **A+ Blood Bags** | 🔵 **A- Blood Bags**
* 🟢 **B+ Blood Bags** | 🟢 **B- Blood Bags**
* 🟣 **AB+ Blood Bags** | 🟣 **AB- Blood Bags**

---

## 3. 🚑 Blood Bags in Emergency Patient Revival

During field emergency responses, patients suffering severe trauma or blood loss require immediate blood transfusion during resuscitation.

### Revival Step-by-Step Protocol:
1. **Assess Patient:** Verify cardiac arrest or trauma status using `/do` medical RP.
2. **Attach Blood Container & Bag:** Retrieve compatible blood bag (e.g. O- or matching type) from your container.
3. **Administer Transfusion:** `/me attaches IV line and begins rapid transfusion of O- Blood Bag`.
4. **Apply Defibrillator / Medkit:** Perform shock/stabilization to successfully revive the patient.
