import { useTranslation } from 'react-i18next';

interface IntroTextProps {
  className?: string;
}

const IntroText: React.FC<IntroTextProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  // Method 1: Join with line breaks and use CSS
  const intro2Joined = t('intro_2', { returnObjects: true, joinArrays: '\n' }) as string;
  
  // Method 2: Map over array and add <br /> elements
  const intro2Array = t('intro_2', { returnObjects: true }) as string[];

  return (
    <div className={className}>
      {/* Method 1: Using CSS white-space */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Method 1 - CSS white-space:</h3>
        <p className="whitespace-pre-line text-gray-700 leading-relaxed">
          {intro2Joined}
        </p>
      </div>

      {/* Method 2: Using JSX mapping */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Method 2 - JSX mapping:</h3>
        <p className="text-gray-700 leading-relaxed">
          {intro2Array.map((line, index) => (
            <span key={index}>
              {line}
              {index < intro2Array.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>

      {/* Method 3: Separate paragraphs */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Method 3 - Separate paragraphs:</h3>
        {intro2Array.map((line, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default IntroText;

