import Container from './container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <Container>
        <div className="py-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Open Mission of Hope. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
