const cohere = require('cohere-ai');

cohere.init('tOegca5OjB2JOqn2Smf8hzqgSKBW6OTeNrr6IoCn');

(async () => {
  const response = await cohere.classify({
    model: 'small',
    inputs: ["I\'m not comfortable with makeup, but I want to explore a smokey eye and bold lip. I am also interested in contour makeup."],
    examples: [{"text": "I am not very comfortable with makeup.", "label": "light"}, {"text": "I rarely or never wear makeup because I don\'t know how to apply much of it.", "label": "light"}, {"text": "I am somewhat comfortable with makeup.", "label": "medium"}, {"text": "I like makeup, but I am looking to learn more about what to wear and how to wear it.", "label": "medium"}, {"text": "I am very comfortable with makeup.", "label": "heavy"}, {"text": "I am a makeup pro and I never leave the house without looking glamorous.", "label": "heavy"}, {"text": "I wear mascara sometimes.", "label": "medium"}, {"text": "I always do brow makeup.", "label": "heavy"}, {"text": "I don\'t usually wear eye shadow.", "label": "light"}, {"text": "I am interested in learning how to wear fake lashes.", "label": "medium"}, {"text": "I always wear a bold lip.", "label": "heavy"}, {"text": "I rarely wear lipstick.", "label": "light"}, {"text": "I wear lip gloss sometimes.", "label": "medium"}, {"text": "I always wear lip liner.", "label": "heavy"}, {"text": "I prefer eyeshadow in neutral shades.", "label": "light"}, {"text": "I love being adventurous with my eyeshadow colour.", "label": "heavy"}, {"text": "I usually wear neutral lip colours.", "label": "light"}, {"text": "I\'m open to wearing berry shades on my lip.", "label": "medium"}, {"text": "I usually wear foundation.", "label": "medium"}, {"text": "Tinted moisturizer is my go-to.", "label": "light"}, {"text": "I never go outside without baking my makeup.", "label": "heavy"}, {"text": "I love when my highlighter shines.", "label": "heavy"}, {"text": "Contour makeup scares me.", "label": "light"}, {"text": "I have no makeup or brush tools.", "label": "light"}]
  });
  console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);

})();