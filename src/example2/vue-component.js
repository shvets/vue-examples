export default {
  template: `
    <div>
     <h1>Single File Vue Component</h1>
     <p>{{ message }}</p>
    </div>
  `,
  data() {
    return {
      message: 'Hello from single file vue component'
    }
  }
};
