import Footerr from "../Footer";
import NavBar from "../Navbar";

const FindTest = () => {
    return (
        <div> 
            <NavBar></NavBar>

            {/* Components  */}
            <div className="container  mt-5 pt-4 pb-5">
                <ul class="nav nav-tabs position-absolute start-50 translate-middle" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Common Test</button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">All Tests</button>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">

                {/* Common Tests */}
                <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">

                                   <div className="accordion mt-3" id="accordionExample">

<div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ACE (ANGIOTENSIN CONVERTING ENZYME)
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div className="panel-body">
<h3>Indication</h3>
<p>This assay is used for evaluation of patients with suspected Sarcoidosis &amp; confirm Gaucher disease and Leprosy.</p>
<h3 className="lh-lg">What "high" or "increased" may indicate</h3>
<ul className="list list-disc">
<li>Sarcoidosis</li>
<li>Leprosy</li>
<li>Gaucher disease</li>
<li>Diabetic retinopathy</li>
<li>Liver disease</li>
<li>Hyperthyroidism</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood/CSF Immediately freeze separated serum.</p>
<h3>Patient Preparation</h3>
<p>Overnight fasting is preferred (11 - 12 hrs). Fasting is defined as no consumption of food or beverages other than water before blood collection.</p>
</div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    5 HIAA (5 HYDROXY INDOLE ACITIC ACID) 
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
        <h3>Indication</h3>
        <p>This assay is useful for biochemical diagnosis and monitoring of intestinal carcinoid syndrome. It is an indicator of serotonin producing tumor.</p>
        <h3>Sample</h3>
        <p>24 hrs urine</p>
        <h3>Patient's Preparation</h3>
        <p>The patient should strictly avoid Banana, Kiwis, Walnut, Avocado, Eggplant, Pineapple, Plum, Tomato and Promethazine, Alcoholic beverages, Tea/Coffee, Tobacco and strenuous exercise at least 72 hrs before and during specimen collection. Drugs including</p>
        <ul className="list list-disc">
        <li>Fluorouracil</li>
        <li>Melphalan</li>
        <li>Phenothiazines</li>
        <li>Acetaminophen</li>
        <li>Guaifenesin</li>
        <li>Isoniazid</li>
        <li>MAO inhibitors</li>
        <li>Mephenesin</li>
        <li>Methenamine compounds</li>
        <li>Methocarbamol</li>
        <li>Methyldopa</li>
        <li>Phenothiazine</li>
        <li>Reserpine salicylates</li>
        <li>Tricyclic antidepressants</li>
        </ul>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    ACTH (ADRENO CORTICOTROPHIC HORMONE)
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>This assay is useful for biochemical diagnosis and monitoring of intestinal carcinoid syndrome. It is an indicator of serotonin producing tumor.</p>
<h3>Sample</h3>
<p>24 hrs urine</p>
<h3>Patient's Preparation</h3>
<p>The patient should strictly avoid Banana, Kiwis, Walnut, Avocado, Eggplant, Pineapple, Plum, Tomato and Promethazine, Alcoholic beverages, Tea/Coffee, Tobacco and strenuous exercise at least 72 hrs before and during specimen collection. Drugs including</p>
<ul className="list list-disc">
<li>Fluorouracil</li>
<li>Melphalan</li>
<li>Phenothiazines</li>
<li>Acetaminophen</li>
<li>Guaifenesin</li>
<li>Isoniazid</li>
<li>MAO inhibitors</li>
<li>Mephenesin</li>
<li>Methenamine compounds</li>
<li>Methocarbamol</li>
<li>Methyldopa</li>
<li>Phenothiazine</li>
<li>Reserpine salicylates</li>
<li>Tricyclic antidepressants</li>
</ul>
</div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    ALDOSTERONE
    </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Investigation of primary Aldosteronism (Adrenal Adenoma / Carcinoma and Adrenal Cortical hypoplasia) and secondary Aldosteronism (Renovascular disease, salt depletion, potassium loading , cardiac failure with ascites and pregnancy)</p>
<h3>What "high" or "increased" may indicate</h3>
<ul className="list list-disc">
<li>Hypertension Primary Aldosteronism</li>
<li>Cancer of the adrenal cortex Overactive adrenal cortex</li>
<li>Congestive heart failure Cirrhosis</li>
<li>Third trimester of pregnancy</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul className="list list-disc">
<li>Hypo Aldosteronism 2 Addison' s disease</li>
<li>Toxemia of pregnancy</li>
<li>Loss of too much salt</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood (Chilled tube)</p>
<h3>Patient's Preparation</h3>
<p>Complete 30 min rest before blood collection. Eat a law carbohydrate, normal salt diet (3g/day for at least 2 weeks before the test. If possible eat this diet for 30 days before the test. Don't eat licorice for at least 2 weeks before the test.</p>
</div>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
    INSULIN 
    </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>This assay is useful in the management of diabetes. It is also used for diagnosis of insulin resistant status. Helps confirm diagnosis of hypoglycemia resulting from tumor, abnormal increase of pancreatic islet cells, glucocorticoid deficiency or severe liver disease.</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>High insulin levels with a Corresponding low blood sugar level , suggest insulinoma.</li>
<li>Insulin resistant diabetes mellitus</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Non-insulin resistant diabetes mellitus.</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patients Preparation</h3>
<p>Preferred fasting. Fasting is defined as no consumption of food or beverages other than water for at least 8-12 hrs before blood collection.</p>
</div>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
    Lp(a) (LIPOPROTEIN A)
    </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
        <h3>Indication</h3>
        <p>This assay is useful for biochemical diagnosis and monitoring of intestinal carcinoid syndrome. It is an indicator of serotonin producing tumor.</p>
        <h3>Sample</h3>
        <p>24 hrs urine</p>
        <h3>Patient's Preparation</h3>
        <p>The patient should strictly avoid Banana, Kiwis, Walnut, Avocado, Eggplant, Pineapple, Plum, Tomato and Promethazine, Alcoholic beverages, Tea/Coffee, Tobacco and strenuous exercise at least 72 hrs before and during specimen collection. Drugs including</p>
        <ul className="list list-disc">
        <li>Fluorouracil</li>
        <li>Melphalan</li>
        <li>Phenothiazines</li>
        <li>Acetaminophen</li>
        <li>Guaifenesin</li>
        <li>Isoniazid</li>
        <li>MAO inhibitors</li>
        <li>Mephenesin</li>
        <li>Methenamine compounds</li>
        <li>Methocarbamol</li>
        <li>Methyldopa</li>
        <li>Phenothiazine</li>
        <li>Reserpine salicylates</li>
        <li>Tricyclic antidepressants</li>
        </ul>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
    LIPID PROFILE
    </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Lipid disorders. Helps determines the risk of heart disease, especially the risk of coronary- artery disease. Evaluates fat metabolism Helps confirm diagnosis of nephrotic syndrome Pancreatitis, liver disease, hypothyroidism (CHD)</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>Bile-duct blockage</li>
<li>Hyperthyroidism</li>
<li>Early hepatitis</li>
<li>Liver disease</li>
<li>Consumption of a high -fat diet</li>
<li>Hypothyroidism Increase risk of coronary- artery disease</li>
<li>Pancreafitis</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Liver disease</li>
<li>Hypothyroidism</li>
<li>Malnutrition</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>Overnight fasting is required. Minimum 12 hours. (Fasting is mandatory)</p>
<p>Adults: 12 -14 hrs</p>
<p>Pediatric less than 6 yrs: Just before the feed/meal</p>
<p>Pediatric older than 6 yrs: Overnight fast specially the fasting period</p>
<p>For optimal results, the patient should be on a stable diet for 2- 3 weeks prior to testing. Fasting is defined as no consumption of food or beverages other than water before blood collection.</p>
</div>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
    PTH (PARATHYROID HORMONE)
    </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>This assay useful for diagnosis and differential diagnosis of hypercalcemia. It also help in the diagnosis of Primary/Secondary/Tertiary Hyperparathyroidism and Hypoparathyroidism.</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>Hyperparathyroidism</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Hyperparathyroidism</li>
<li>Lung cancer</li>
<li>Kidney, pancreas or Ovarian cancer</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood (Chilled tube) Obtain ice before drow for specimen transport.</p>
<h3>Patient's Preparation</h3>
<p>12 hrs fasting before the sample collection. Fasting is defined as no consumption of food or beverages other than water.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
    CORTISOL
    </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Adrenocortical function Helps confirm diagnosis of Cushing' s disease &amp;Addison' s disease Helps diagnose secondary adrenal insufficiency.</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>Cushing' s disease</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Addison' s disease</li>
<li>ACTH secretion Hypophysectomy</li>
<li>Post - Partum pituitary necrosis</li>
<li>Craniopharingioma</li>
<li>Chromophobe adenoma</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>Cortisol blood test may be drawn at about morning 9 am or mid night or any special request .Limit your physical activity for 10 -12 hrs before the test. Eat normal salt diet (3g/day) for 3 days before the test.</p>
<p>CORTISOL, STIMULATION BY ACTH J CORTISOL SUSPRESSION TEST BY ZONE.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
    TESTOSTERONE Free
    </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Measurement of free testosterone may be useful when disturbances in SHBG are suspected as in obesity and estrogen excess.</p>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>12 hrs fasting before the sample collection. Fasting is defined as no consumption of food or beverages other than water.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="heading11">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
    C- PEPTIDE
    </button>
    </h2>
    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>C-peptide is useful in distinguishing insulinomas from exogenous insulin administration. Its concentration is severely decreased or absent in Type I Diabetes mellitus. C- peptide is also useful in monitoring patients who have received Islet cell or pancreatic transplants.</p>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>Fasting is defined as no consumption of food or beverages other than water for 12-14 hrs before blood collection.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="heading12">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
    FAECES for OCCULT BLOOD TEST
    </button>
    </h2>
    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Suspected colorectal cancers. Polyps, gastrointestinal bleeding.</p>
<h3>What “abnormal" may indicate</h3>
<ul class="list list-disc">
<li>A positive test indicates gastrointestinal bleeding.</li>
<li>Varices.</li>
<li>Peptic Ulcer.</li>
<li>Carcinoma.</li>
<li>Ulcerative Colitis.</li>
<li>Dysentery.</li>
<li>Haemorrhagic disease.</li>
</ul>
<h3>Sample</h3>
<p>Approximately 5 -10 g</p>
<h3>Patients Preparation</h3>
<p>Random sample In case of menstrual period, delay the sample collection by 3 days. Refrain from taking alcohol, aspirin or other gastro-irritant medicine which could provoke bleeding, at least 48 hrs before the sample collection. For the three day before and during stool collection eat a well-balanced diet including fiber such as bran cereals, fruit and vegetable. Avoid red meats Including beef, lamb, and liver.</p>
</div>
        </div>
    </div>
</div>









</div>                    

                
                </div>
                
                
                {/* All test */}
                <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">

               <div className="accordion mt-3" id="accordionExample">

<div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ACE (ANGIOTENSIN CONVERTING ENZYME)
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div className="panel-body">
<h3>Indication</h3>
<p>This assay is used for evaluation of patients with suspected Sarcoidosis &amp; confirm Gaucher disease and Leprosy.</p>
<h3 className="lh-lg">What "high" or "increased" may indicate</h3>
<ul className="list list-disc">
<li>Sarcoidosis</li>
<li>Leprosy</li>
<li>Gaucher disease</li>
<li>Diabetic retinopathy</li>
<li>Liver disease</li>
<li>Hyperthyroidism</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood/CSF Immediately freeze separated serum.</p>
<h3>Patient Preparation</h3>
<p>Overnight fasting is preferred (11 - 12 hrs). Fasting is defined as no consumption of food or beverages other than water before blood collection.</p>
</div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    5 HIAA (5 HYDROXY INDOLE ACITIC ACID) 
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
        <h3>Indication</h3>
        <p>This assay is useful for biochemical diagnosis and monitoring of intestinal carcinoid syndrome. It is an indicator of serotonin producing tumor.</p>
        <h3>Sample</h3>
        <p>24 hrs urine</p>
        <h3>Patient's Preparation</h3>
        <p>The patient should strictly avoid Banana, Kiwis, Walnut, Avocado, Eggplant, Pineapple, Plum, Tomato and Promethazine, Alcoholic beverages, Tea/Coffee, Tobacco and strenuous exercise at least 72 hrs before and during specimen collection. Drugs including</p>
        <ul className="list list-disc">
        <li>Fluorouracil</li>
        <li>Melphalan</li>
        <li>Phenothiazines</li>
        <li>Acetaminophen</li>
        <li>Guaifenesin</li>
        <li>Isoniazid</li>
        <li>MAO inhibitors</li>
        <li>Mephenesin</li>
        <li>Methenamine compounds</li>
        <li>Methocarbamol</li>
        <li>Methyldopa</li>
        <li>Phenothiazine</li>
        <li>Reserpine salicylates</li>
        <li>Tricyclic antidepressants</li>
        </ul>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    ACTH (ADRENO CORTICOTROPHIC HORMONE)
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>This assay is useful for biochemical diagnosis and monitoring of intestinal carcinoid syndrome. It is an indicator of serotonin producing tumor.</p>
<h3>Sample</h3>
<p>24 hrs urine</p>
<h3>Patient's Preparation</h3>
<p>The patient should strictly avoid Banana, Kiwis, Walnut, Avocado, Eggplant, Pineapple, Plum, Tomato and Promethazine, Alcoholic beverages, Tea/Coffee, Tobacco and strenuous exercise at least 72 hrs before and during specimen collection. Drugs including</p>
<ul className="list list-disc">
<li>Fluorouracil</li>
<li>Melphalan</li>
<li>Phenothiazines</li>
<li>Acetaminophen</li>
<li>Guaifenesin</li>
<li>Isoniazid</li>
<li>MAO inhibitors</li>
<li>Mephenesin</li>
<li>Methenamine compounds</li>
<li>Methocarbamol</li>
<li>Methyldopa</li>
<li>Phenothiazine</li>
<li>Reserpine salicylates</li>
<li>Tricyclic antidepressants</li>
</ul>
</div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    ALDOSTERONE
    </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Investigation of primary Aldosteronism (Adrenal Adenoma / Carcinoma and Adrenal Cortical hypoplasia) and secondary Aldosteronism (Renovascular disease, salt depletion, potassium loading , cardiac failure with ascites and pregnancy)</p>
<h3>What "high" or "increased" may indicate</h3>
<ul className="list list-disc">
<li>Hypertension Primary Aldosteronism</li>
<li>Cancer of the adrenal cortex Overactive adrenal cortex</li>
<li>Congestive heart failure Cirrhosis</li>
<li>Third trimester of pregnancy</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul className="list list-disc">
<li>Hypo Aldosteronism 2 Addison' s disease</li>
<li>Toxemia of pregnancy</li>
<li>Loss of too much salt</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood (Chilled tube)</p>
<h3>Patient's Preparation</h3>
<p>Complete 30 min rest before blood collection. Eat a law carbohydrate, normal salt diet (3g/day for at least 2 weeks before the test. If possible eat this diet for 30 days before the test. Don't eat licorice for at least 2 weeks before the test.</p>
</div>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
    INSULIN 
    </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>This assay is useful in the management of diabetes. It is also used for diagnosis of insulin resistant status. Helps confirm diagnosis of hypoglycemia resulting from tumor, abnormal increase of pancreatic islet cells, glucocorticoid deficiency or severe liver disease.</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>High insulin levels with a Corresponding low blood sugar level , suggest insulinoma.</li>
<li>Insulin resistant diabetes mellitus</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Non-insulin resistant diabetes mellitus.</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patients Preparation</h3>
<p>Preferred fasting. Fasting is defined as no consumption of food or beverages other than water for at least 8-12 hrs before blood collection.</p>
</div>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
    Lp(a) (LIPOPROTEIN A)
    </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
        <h3>Indication</h3>
        <p>This assay is useful for biochemical diagnosis and monitoring of intestinal carcinoid syndrome. It is an indicator of serotonin producing tumor.</p>
        <h3>Sample</h3>
        <p>24 hrs urine</p>
        <h3>Patient's Preparation</h3>
        <p>The patient should strictly avoid Banana, Kiwis, Walnut, Avocado, Eggplant, Pineapple, Plum, Tomato and Promethazine, Alcoholic beverages, Tea/Coffee, Tobacco and strenuous exercise at least 72 hrs before and during specimen collection. Drugs including</p>
        <ul className="list list-disc">
        <li>Fluorouracil</li>
        <li>Melphalan</li>
        <li>Phenothiazines</li>
        <li>Acetaminophen</li>
        <li>Guaifenesin</li>
        <li>Isoniazid</li>
        <li>MAO inhibitors</li>
        <li>Mephenesin</li>
        <li>Methenamine compounds</li>
        <li>Methocarbamol</li>
        <li>Methyldopa</li>
        <li>Phenothiazine</li>
        <li>Reserpine salicylates</li>
        <li>Tricyclic antidepressants</li>
        </ul>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
    LIPID PROFILE
    </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Lipid disorders. Helps determines the risk of heart disease, especially the risk of coronary- artery disease. Evaluates fat metabolism Helps confirm diagnosis of nephrotic syndrome Pancreatitis, liver disease, hypothyroidism (CHD)</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>Bile-duct blockage</li>
<li>Hyperthyroidism</li>
<li>Early hepatitis</li>
<li>Liver disease</li>
<li>Consumption of a high -fat diet</li>
<li>Hypothyroidism Increase risk of coronary- artery disease</li>
<li>Pancreafitis</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Liver disease</li>
<li>Hypothyroidism</li>
<li>Malnutrition</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>Overnight fasting is required. Minimum 12 hours. (Fasting is mandatory)</p>
<p>Adults: 12 -14 hrs</p>
<p>Pediatric less than 6 yrs: Just before the feed/meal</p>
<p>Pediatric older than 6 yrs: Overnight fast specially the fasting period</p>
<p>For optimal results, the patient should be on a stable diet for 2- 3 weeks prior to testing. Fasting is defined as no consumption of food or beverages other than water before blood collection.</p>
</div>
        </div>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
    PTH (PARATHYROID HORMONE)
    </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>This assay useful for diagnosis and differential diagnosis of hypercalcemia. It also help in the diagnosis of Primary/Secondary/Tertiary Hyperparathyroidism and Hypoparathyroidism.</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>Hyperparathyroidism</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Hyperparathyroidism</li>
<li>Lung cancer</li>
<li>Kidney, pancreas or Ovarian cancer</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood (Chilled tube) Obtain ice before drow for specimen transport.</p>
<h3>Patient's Preparation</h3>
<p>12 hrs fasting before the sample collection. Fasting is defined as no consumption of food or beverages other than water.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
    CORTISOL
    </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Adrenocortical function Helps confirm diagnosis of Cushing' s disease &amp;Addison' s disease Helps diagnose secondary adrenal insufficiency.</p>
<h3>What "high" or "increased" may indicate</h3>
<ul class="list list-disc">
<li>Cushing' s disease</li>
</ul>
<h3>What "low" or "decreased" may indicate</h3>
<ul class="list list-disc">
<li>Addison' s disease</li>
<li>ACTH secretion Hypophysectomy</li>
<li>Post - Partum pituitary necrosis</li>
<li>Craniopharingioma</li>
<li>Chromophobe adenoma</li>
</ul>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>Cortisol blood test may be drawn at about morning 9 am or mid night or any special request .Limit your physical activity for 10 -12 hrs before the test. Eat normal salt diet (3g/day) for 3 days before the test.</p>
<p>CORTISOL, STIMULATION BY ACTH J CORTISOL SUSPRESSION TEST BY ZONE.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
    TESTOSTERONE Free
    </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Measurement of free testosterone may be useful when disturbances in SHBG are suspected as in obesity and estrogen excess.</p>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>12 hrs fasting before the sample collection. Fasting is defined as no consumption of food or beverages other than water.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="heading11">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
    C- PEPTIDE
    </button>
    </h2>
    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>C-peptide is useful in distinguishing insulinomas from exogenous insulin administration. Its concentration is severely decreased or absent in Type I Diabetes mellitus. C- peptide is also useful in monitoring patients who have received Islet cell or pancreatic transplants.</p>
<h3>Sample</h3>
<p>Plain clotted blood</p>
<h3>Patient's Preparation</h3>
<p>Fasting is defined as no consumption of food or beverages other than water for 12-14 hrs before blood collection.</p>
</div>
        </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="heading12">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
    FAECES for OCCULT BLOOD TEST
    </button>
    </h2>
    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div class="panel-body">
<h3>Indication</h3>
<p>Suspected colorectal cancers. Polyps, gastrointestinal bleeding.</p>
<h3>What “abnormal" may indicate</h3>
<ul class="list list-disc">
<li>A positive test indicates gastrointestinal bleeding.</li>
<li>Varices.</li>
<li>Peptic Ulcer.</li>
<li>Carcinoma.</li>
<li>Ulcerative Colitis.</li>
<li>Dysentery.</li>
<li>Haemorrhagic disease.</li>
</ul>
<h3>Sample</h3>
<p>Approximately 5 -10 g</p>
<h3>Patients Preparation</h3>
<p>Random sample In case of menstrual period, delay the sample collection by 3 days. Refrain from taking alcohol, aspirin or other gastro-irritant medicine which could provoke bleeding, at least 48 hrs before the sample collection. For the three day before and during stool collection eat a well-balanced diet including fiber such as bran cereals, fruit and vegetable. Avoid red meats Including beef, lamb, and liver.</p>
</div>
        </div>
    </div>
</div>









</div>                    


                </div>


                {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
            </div>
            </div>

            {/* Footer */}
            <Footerr></Footerr>
        </div>
     );
}
 
export default FindTest;