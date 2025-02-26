const QuestionAnswer = () => {
  return (
    <div className="lg:mx-[112px]">
      <h1 className="text-5xl font-Montserrat text-center font-semibold">
        Common Questions
      </h1>
      <div className="grid lg:grid-cols-2 p-4 lg:p-0 gap-10 mt-16">
        {/*  */}
        <div>
          <div className="collapse collapse-plus bg-base-200 ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Who is Intake for?
            </div>
            <div className="p-8 h-60">
              <p>
                Everyone. If you snore, have trouble sleeping, wake up with a
                dry mouth, or want to boost your workouts — try Intake. Trust
                us. Actually, we considered ourselves pretty good at breathing
                through our nose—until we tried Intake, and realized there was a
                whole world of air out there that we didn’t even know we were
                missing. But if you do have a history of allergies, sinus
                infections, a deviated septum, or anything that makes it
                difficult for you to breathe, Intake may help greatly.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Will it help my snoring?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Why Nasal Breathing?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <div className="collapse collapse-plus bg-base-200 ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Why magnets?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How Intake helps
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How Long It Take To Work?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How it works
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What about for workouts?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What&apos;s the cost difference?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
